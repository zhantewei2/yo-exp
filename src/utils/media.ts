import {
  of,
  fromEvent,
  Observable,
  scheduled,
  queueScheduler,
  Subject,
  merge,
} from "rxjs";
import { mergeAll, mergeMap, map, distinctUntilChanged } from "rxjs/operators";

export type MediaRule =
  | "4k"
  | "2k"
  | "1k"
  | "xxl"
  | "xl"
  | "l"
  | "m"
  | "s"
  | "i";

export class Media {
  dict: Record<MediaRule, number> = {
    "4k": 4000,
    "2k": 2000,
    "1k": 1900,
    xxl: 1600,
    xl: 1300,
    l: 1020,
    m: 760,
    s: 480,
    i: 0,
  };
  widthSub: Subject<number> = new Subject<number>();
  listenWidth: Observable<number> = scheduled(
    [of(0).pipe(map(() => this.screenWidth)), this.widthSub],
    queueScheduler
  ).pipe(mergeAll());

  mobileRule: MediaRule = "l";
  screenWidth: number;
  ifMobile(): Observable<boolean> {
    return scheduled(
      [of(this.screenWidth).pipe(map(() => this.screenWidth)), this.widthSub],
      queueScheduler
    )
      .pipe(mergeAll())
      .pipe(
        map((width) => {
          return width < this.dict[this.mobileRule];
        }),
        distinctUntilChanged()
      );
  }
  listen() {
    scheduled(
      [
        of(0).pipe(map(() => window.innerWidth)),
        fromEvent(window, "resize").pipe(map(() => window.innerWidth)),
      ],
      queueScheduler
    )
      .pipe(mergeAll())
      .subscribe((i) => {
        this.widthSub.next((this.screenWidth = i));
      });
  }
}

export const media = new Media();
