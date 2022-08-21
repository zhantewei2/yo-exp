import { Observable, Subject } from "rxjs";
export declare type MediaRule = "4k" | "2k" | "1k" | "xxl" | "xl" | "l" | "m" | "s" | "i";
export declare class Media {
    dict: Record<MediaRule, number>;
    widthSub: Subject<number>;
    listenWidth: Observable<number>;
    mobileRule: MediaRule;
    screenWidth: number;
    ifMobile(): Observable<boolean>;
    listen(): void;
}
export declare const media: Media;
