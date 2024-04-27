/* based off of a fanmade MSM song called Magical Madness. check it out! https://youtu.be/oHXG_zE5RSA?si=u8bNZTISHA-yhSXQ */
var app = new function() {
    this.name = "Ascension", 
    this.version = "2", 
    this.date = "2023", 
    this.folder = "asset-v2/", 
    this.looptime = 6545, 
    this.bpm = 110, // Time signature: 3/4
    this.totalframe = 192, 
    this.nbpolo = 7, 
    this.nbloopbonus = 6, 
    this.bonusloopA = !0, 
    this.bonusendloopA = !6, 
    this.recmaxloop = 38, 
    this.recminloop = 2, 
    this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, 
    this.spritepolo = "polo-sprite.png", 
    this.spritepicto = "game-picto.png", 
    this.colBck = "#000000", 
    this.col0 = "#c9cc31", 
    this.col1 = "#c9cc31", 
    this.col2 = "#7b7d1f", 
    this.col3 = "#515214", 
    this.col4 = "#515214", 
    this.animearray = [
        {name: "1_star", color: "e7d13a", uniqsnd: !0}, 
        {name: "2_healed", color: "e7d13a", uniqsnd: !0}, 
        {name: "3_trisnare", color: "e7d13a", uniqsnd: !0}, 
        {name: "4_bongo", color: "e7d13a", uniqsnd: !0}, 
        {name: "5_clock", color: "e7d13a", uniqsnd: !0}, 
        {name: "6_bassi", color: "e7d13a", uniqsnd: !0}, 
        {name: "7_bassus", color: "e7d13a", uniqsnd: !0}, 
        {name: "8_mouthful", color: "e7d13a", uniqsnd: !0}, 
        {name: "9_schacka", color: "e7d13a", uniqsnd: !0}, 
        {name: "10_pad", color: "e7d13a", uniqsnd: !0}, 
        {name: "11_protector", color: "36eae4", uniqsnd: !0}, 
        {name: "12_piano", color: "36eae4", uniqsnd: !0}, 
        {name: "13_bells", color: "36eae4", uniqsnd: !0}, 
        {name: "14_saw", color: "36eae4", uniqsnd: !0}, 
        {name: "15_trumbi", color: "36eae4", uniqsnd: !0}, 
        {name: "16_lost", color: "36eae4", uniqsnd: !0}, 
        {name: "17_cosin", color: "36eae4", uniqsnd: !0}, 
        {name: "18_yevangeliye", color: "36eae4", uniqsnd: !0}, 
        {name: "19_luna", color: "36eae4", uniqsnd: !0}, 
        {name: "20_mmm", color: "36eae4", uniqsnd: !0}
    ], 
    this.bonusarray = [
        {name: "In the Clouds", src: "bonus_clouds-hb.mp4", code: "1,2,5,11,12", sound: "21_bonus_clouds", aspire: "aspire-clouds"},
        {name: "Sacred Warriors", src: "bonus_warriors-hb.mp4", code: "1,3,6,15,16", sound: "22_bonus_warriors", aspire: "aspire"},
        {name: "Descension", src: "bonus_descension-hb.mp4", code: "4,5,9,14,18", sound: "23_bonus_descension", aspire: "aspire"}
    ];
    for (var o = 0, n = this.animearray.length; o < n; o++) {
        var i = this.animearray[o].name;
        this.animearray[o].soundA = i + "_a", this.animearray[o].soundB = this.animearray[o].uniqsnd ? i + "_a" : i + "_b", this.animearray[o].anime = i + "-sprite.png", this.animearray[o].animeData = i + ".json"
    }
};
