/* RETURN THE SLAB */
var app = new function() {
    this.name = "Golden Sands",
    this.version = "4", 
    this.date = "2024", 
    this.folder = "asset-v4/", 
    this.looptime = 9600, 
    this.bpm = 100, 
    this.totalframe = 256, 
    this.nbpolo = 7, 
    this.nbloopbonus = 6, 
    this.bonusloopA = !0, 
    this.bonusendloopA = !4, 
    this.recmaxloop = 34, 
    this.recminloop = 4, 
    this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, 
    this.spritepolo = "polo-sprite.png", 
    this.spritepicto = "game-picto.png", 
    this.colBck = "#000000", 
    this.col0 = "#bd8d14", 
    this.col1 = "#bd8d14", 
    this.col2 = "#755a20", 
    this.col3 = "#4f3a0a", 
    this.col4 = "#4f3a0a", 
    this.animearray = [
        {name: "1_brixnbax", color: "d9b832", uniqsnd: !0}, 
        {name: "2_tut", color: "d9b832", uniqsnd: !0}, 
        {name: "3_skylowkey", color: "d9b832", uniqsnd: !0}, 
        {name: "4_jabba", color: "d9b832", uniqsnd: !0}, 
        {name: "5_bob", color: "d9b832", uniqsnd: !0}, 
        {name: "6_piramido", color: "5f00b8", uniqsnd: !0}, 
        {name: "7_guit", color: "5f00b8", uniqsnd: !0}, 
        {name: "8_slither", color: "5f00b8", uniqsnd: !0}, 
        {name: "9_tabl", color: "5f00b8", uniqsnd: !0}, 
        {name: "10_duku", color: "5f00b8", uniqsnd: !0}, 
        {name: "11_kris", color: "00cc81", uniqsnd: !0}, 
        {name: "12_tumbari", color: "00cc81", uniqsnd: !0}, 
        {name: "13_muhammed", color: "00cc81", uniqsnd: !0}, 
        {name: "14_hijab", color: "00cc81", uniqsnd: !0}, 
        {name: "15_oudjat", color: "00cc81", uniqsnd: !0}, 
        {name: "16_foretold", color: "b80084", uniqsnd: !0}, 
        {name: "17_mozaika", color: "b80084", uniqsnd: !0}, 
        {name: "18_ulysses", color: "b80084", uniqsnd: !0}, 
        {name: "19_cursed", color: "b80084", uniqsnd: !0}, 
        {name: "20_rich", color: "b80084", uniqsnd: !0}
    ], 
    this.bonusarray = [
        {name: "Azoic", src: "bonus_azoic-hb.mp4", code: "1,3,6,8,17", sound: "21_bonus_azoic", aspire: "aspire-azoic"}/*,
        {name: "Prophecy", src: "bonus_prophecy-hb.mp4", code: "1,3,7,12,16", sound: "22_bonus_prophecy", aspire: "aspire-prophecy"},
        {name: "Requiem", src: "bonus_requiem-hb.mp4", code: "2,10,13,15,17", sound: "23_bonus_requiem", aspire: "aspire"} */
    ];
    for (var o = 0, n = this.animearray.length; o < n; o++) {
        var e = this.animearray[o].name;
        this.animearray[o].soundA = e + "_a", this.animearray[o].soundB = this.animearray[o].uniqsnd ? e + "_a" : e + "_b", this.animearray[o].anime = e + "-sprite.png", this.animearray[o].animeData = e + ".json"
    }
};