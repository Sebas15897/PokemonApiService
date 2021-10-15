export class getPoke {
    static readonly type="[POKE] get";
}
export class getPokeImage {
    static readonly type="[POKE] get image";
    constructor(public payload: string) {}
}
export class getDetailsPoke {
    static readonly type="[POKE] get details";
    constructor(public payload: string) {}
}