// {
// 	"comment":"These are definitions for key of C",
//             "chords":{
//             	"I":"Cmaj",
//             	"ii":"Dmin",
//             	"iii":"Emin",
//             	"IV":"Fmaj",
//             	"V":"Gmaj"
//             	"vi":"Amin",
//             	"vii":"Bdim",
//     			}
// }
const chordName = {
	C: {
		I: "Cmaj",
		ii: "Dmin",
		iii: "Emin",
		IV: "Fmaj",
		V: "Gmaj",
		vi: "Amin",
		vii: "Bdim"
	},
	F: {
		I:"Fmaj",
		ii:"Gmin",
		iii:"Amin",
		IV:"Bb maj",
		V:"Cmaj",
		vi:"Dmin",
		vii:"E dim",
	},
	G: {
		I:"Gmaj",
		ii:"Amin",
		iii:"Bmin",
		IV:"Cmaj",
		V:"Dmaj",
		vi:"Emin",
		vii:"F# dim",
	}
	// ,
	// F: {
	// 	I: "Fmaj"
	// },
	// G: {
	// 	I: "Gmaj"
	// }
}



console.log(chordName.C.iii);

export default chordName
