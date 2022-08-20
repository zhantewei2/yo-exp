//shallow filter
export const filterObject=<T,S extends keyof T>(obj:T,remove:S[]):Omit<T,S>=>{
  const newObj:any={};
  Reflect.ownKeys(obj as any).forEach(key=>{
    if(!remove.includes(key as any))newObj[key]=obj[key as S];
  })
  return newObj;
}
