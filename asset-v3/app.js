/* based off of that one song from the steven universe season 1 ost */
/* try to see if you can guess what the name is ;) */
var app = new function() {
    this.name = "New Era", 
    this.version = "3", 
    this.date = "2024",
    this.folder = "asset-v3/", 
    this.looptime = 15359,
    this.bpm = 125,
    this.totalframe = 520, 
    this.nbpolo = 7, 
    this.nbloopbonus = 4, 
    this.bonusloopA = !1, 
    this.bonusendloopA = !1, 
    this.recmaxloop = 20, 
    this.recminloop = 2, 
    this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, 
    this.spritepolo = "polo-sprite.png", 
    this.spritepicto = "game-picto.png", 
    this.colBck = "#000000", 
    this.col0 = "#B2B2FF", 
    this.col1 = "#B2B2FF", 
    this.col2 = "#7878aa", 
    this.col3 = "#454560", 
    this.col4 = "#454560", 
    this.animearray = [
        {name: "1_diamante", color: "91765b", uniqsnd: !0}, 
        {name: "2_tahir", color: "64956d", uniqsnd: !0}, 
        {name: "3_oxroid", color: "ff9878", uniqsnd: !0}, 
        {name: "4_sundae", color: "492c2c", uniqsnd: !0}, 
        {name: "5_koukgu", color: "a2b4bc", uniqsnd: !0}, 
        {name: "6_basse", color: "aaaaff", uniqsnd: !0}, 
        {name: "7_uuasovi", color: "3939ba", uniqsnd: !0}, 
        {name: "8_lead", color: "dadaff", uniqsnd: !0}, 
        {name: "9_polugonos", color: "505b8a", uniqsnd: !0}, 
        {name: "10_eyevan", color: "64b5f6", uniqsnd: !0}, 
        {name: "11_tetramet", color: "534a80", uniqsnd: !0}, 
        {name: "12_piany", color: "ff8bbd", uniqsnd: !0}, 
        {name: "13_synthia", color: "f2b1ff", uniqsnd: !0}, 
        {name: "14_alex", color: "ffa8bf", uniqsnd: !0}, 
        {name: "15_vellia", color: "b36aff", uniqsnd: !0}, 
        {name: "16_mosaic", color: "d1beb0", uniqsnd: !0}, 
        {name: "17_da-swag-e", color: "8636b8", uniqsnd: !0}, 
        {name: "18_bitbox", color: "ececec", uniqsnd: !0},
        {name: "19_rhododendron", color: "895c69", uniqsnd: !0}, 
        {name: "20_kore", color: "9e9e9e", uniqsnd: !0}, 
        {name: "21_bonus", color: "ffffff", uniqsnd: !0}
    ], 
    this.bonusarray = [
        {name: "Divinity", src: "bonus_divinity-hb.mp4", code: "1,3,6,12,16", sound: "22_bonus_divinity", aspire: "aspire"},
        {name: "Aurora Circuit", src: "bonus_aurora-circuit-hb.mp4", code: "1,2,6,9,19", sound: "23_bonus_aurora", aspire: "aspire"},
        {name: "Crystal Pathways", src: "bonus_crystal-pathways-hb.mp4", code: "6,8,14,15,20", sound: "24_bonus_crystal", aspire: "aspire"}
    ];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};