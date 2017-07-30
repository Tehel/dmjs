'use strict';

const defaultPalette = [0x777, 0x700, 0x070, 0x007, 0x111, 0x222, 0x333, 0x444, 0x555, 0x000, 0x001, 0x010, 0x100, 0x200, 0x020, 0x002];

// properties for every image
// maybe extend this to include for each image: actual size (left black door), transparent color, palettes, format?
// fields: nopreload (false), palette (palettesInterface), transparency (null), format (IMG1), width (null)
const palettesInterface = [0];
const palettesMainView = [0, 1, 2, 3, 4, 5];
const palettesEntrance = [6];
const palettesCredits = [7];
// IMG1: 532 (0-20, 22-532). Empty images 16x4: 22, 24
const imagesIndex = {
	0: {name: 'Interface - Dialog Box'},
	1: {name: 'Interface - Main Title'},
	2: {name: 'Interface - Main Menu Left Door', palettes: palettesEntrance},
	3: {name: 'Interface - Main Menu Right Door', palettes: palettesEntrance},
	4: {name: 'Interface - Main Menu Screen', palettes: palettesEntrance},
	// 5: {name: 'Interface - Credits', palettes: palettesCredits}, // unsupported IMG2 code (0xA) before offset 1400
	6: {name: 'Interface - "The End" Label'},
	7: {name: 'Interface - Champion Information'},
	8: {name: 'Interface - Dead Champion Information'},
	// 9: {name: 'Interface - Unknown use'},
	10: {name: 'Interface - Item Actions Area'},
	11: {name: 'Interface - Spell Casting Area'},
	12: {name: 'Font Used For Scrolls'},
	13: {name: 'Interface - Movement Arrows'},
	14: {name: 'Interface - Damage Done'},
	15: {name: 'Interface - Damage Received (Small)'},
	16: {name: 'Interface - Damage Received (Big)'},
	17: {name: 'Interface - Character Sheet'},
	18: {name: 'Interface - Character Sheet - Arrow Showing The Content Of A Chest'},
	19: {name: 'Interface - Character Sheet - Eye Showing The Properties Of An Item'},
	20: {name: 'Interface - Character Sheet - Empty Information Area'},
	// 22: {name: 'Empty image 16x4'},
	23: {name: 'Interface - Character Sheet - Open Scroll'},
	// 24: {name: 'Empty image 16x4'},
	25: {name: 'Interface - Character Sheet - Open Chest'},
	26: {name: 'Interface - Champions Portraits', nopreload: true},
	27: {name: 'Interface - Character Sheet - Rename Champion'},
	28: {name: 'Interface - Champion Positions'},
	29: {name: 'Interface - Character Sheet - Circle Displayed While Looking At An Item'},
	30: {name: 'Interface - Character Sheet - "Food" Label'},
	31: {name: 'Interface - Character Sheet - "Water" Label'},
	32: {name: 'Interface - Character Sheet - "Poisoned" Label'},
	33: {name: 'Interface - Gray Border Item Slot (Empty)'},
	34: {name: 'Interface - Red Border Item Slot (Wounded)'},
	35: {name: 'Interface - Cyan Border Item Slot (Item Action Selected)'},
	36: {name: 'Interface - White Border Item Slot'},
	37: {name: 'Interface - Blue Border Around Champion Information (Shield Spell ( Shield Potion))'},
	38: {name: 'Interface - Green Border Around Champion Information (Fire Shield Spell ( Fireshield Action))'},
	39: {name: 'Interface - Cyan Border Around Champion Information (Spellshield Action)'},
	40: {name: 'Interface - Character Sheet - Resurrect And Reincarnate'},
	41: {name: 'Dungeon Graphics - Hole In Wall While Using "See Through Walls" Spell'},
	42: {name: 'Items Graphics 0 (32 Items)', nopreload: true},
	43: {name: 'Items Graphics 1 (32 Items)', nopreload: true},
	44: {name: 'Items Graphics 2 (32 Items)', nopreload: true},
	45: {name: 'Items Graphics 3 (32 Items)', nopreload: true},
	46: {name: 'Items Graphics 4 (32 Items)', nopreload: true},
	47: {name: 'Items Graphics 5 (32 Items)', nopreload: true},
	48: {name: 'Items And Body Parts Graphics 6 (32 Items)', nopreload: true},
	49: {name: 'Dungeon Graphics - Floor Pit (Left Side 3)'},
	50: {name: 'Dungeon Graphics - Floor Pit (Front 3)'},
	51: {name: 'Dungeon Graphics - Floor Pit (Left Side 2)'},
	52: {name: 'Dungeon Graphics - Floor Pit (Front 2)'},
	53: {name: 'Dungeon Graphics - Floor Pit (Left Side 1)'},
	54: {name: 'Dungeon Graphics - Floor Pit (Front 1)'},
	55: {name: 'Dungeon Graphics - Floor Pit (Left Side 0)'},
	56: {name: 'Dungeon Graphics - Floor Pit (Front 0)'},
	57: {name: 'Dungeon Graphics - Invisible Floor Pit (Left Side 2)'},
	58: {name: 'Dungeon Graphics - Invisible Floor Pit (Front 2)'},
	59: {name: 'Dungeon Graphics - Invisible Floor Pit (Left Side 1)'},
	60: {name: 'Dungeon Graphics - Invisible Floor Pit (Front 1)'},
	61: {name: 'Dungeon Graphics - Invisible Floor Pit (Left Side 0)'},
	62: {name: 'Dungeon Graphics - Invisible Floor Pit (Front 0)'},
	63: {name: 'Dungeon Graphics - Ceiling Pit (Left Side 2)'},
	64: {name: 'Dungeon Graphics - Ceiling Pit (Front 2)'},
	65: {name: 'Dungeon Graphics - Ceiling Pit (Left Side 1)'},
	66: {name: 'Dungeon Graphics - Ceiling Pit (Front 1)'},
	67: {name: 'Dungeon Graphics - Ceiling Pit (Left Side 0)'},
	68: {name: 'Dungeon Graphics - Ceiling Pit (Front 0)'},
	69: {name: 'Dungeon Graphics - Wall Mask (Right Front 3)'},
	70: {name: 'Dungeon Graphics - Wall Mask (Right Front 2)'},
	71: {name: 'Dungeon Graphics - Wall Mask (Right Front 1)'},
	72: {name: 'Dungeon Graphics - Wall Mask (Right Front 0)'},
	73: {name: 'Dungeon Graphics - Teleporter'},
	74: {name: 'Dungeon Graphics - Fluxcage'},
	75: {name: 'Dungeon Graphics - Floor'},
	76: {name: 'Dungeon Graphics - Ceiling'},
	77: {name: 'Dungeon Graphics - Door Left or Right Frame (Front 1)'},
	78: {name: 'Dungeon Graphics - Door Left Frame (Front 1)'},
	79: {name: 'Dungeon Graphics - Door Left Frame (Front 2)'},
	80: {name: 'Dungeon Graphics - Door Left Frame (Front 3)'},
	81: {name: 'Dungeon Graphics - Door Left Frame (Left Side 3)'},
	82: {name: 'Dungeon Graphics - Door Top Frame (Front 1)'},
	83: {name: 'Dungeon Graphics - Door Top Frame (Front 2)'},
	84: {name: 'Dungeon Graphics - Wall (Right Side 0)'},
	85: {name: 'Dungeon Graphics - Wall (Left Side 0)'},
	86: {name: 'Dungeon Graphics - Wall (Front and Sides 1)'},
	87: {name: 'Dungeon Graphics - Wall (Front and Sides 2)'},
	88: {name: 'Dungeon Graphics - Wall (Front and Sides 3)'},
	89: {name: 'Dungeon Graphics - Wall (Far Left Side 3)'},
	90: {name: 'Dungeon Graphics - Stairs Up (Front 3 Left)'},
	91: {name: 'Dungeon Graphics - Stairs Up (Front 3)'},
	92: {name: 'Dungeon Graphics - Stairs Up (Front 2 Left)'},
	93: {name: 'Dungeon Graphics - Stairs Up (Front 2)'},
	94: {name: 'Dungeon Graphics - Stairs Up (Front 1 Left)'},
	95: {name: 'Dungeon Graphics - Stairs Up (Front 1)'},
	96: {name: 'Dungeon Graphics - Stairs Up (Front 0)'},
	97: {name: 'Dungeon Graphics - Stairs Down (Front 3 Left)'},
	98: {name: 'Dungeon Graphics - Stairs Down (Front 3)'},
	99: {name: 'Dungeon Graphics - Stairs Down (Front 2 Left)'},
	100: {name: 'Dungeon Graphics - Stairs Down (Front 2)'},
	101: {name: 'Dungeon Graphics - Stairs Down (Front 1 Left)'},
	102: {name: 'Dungeon Graphics - Stairs Down (Front 1)'},
	103: {name: 'Dungeon Graphics - Stairs Down (Front 0)'},
	104: {name: 'Dungeon Graphics - Stairs (Side 3 Left)'},
	105: {name: 'Dungeon Graphics - Stairs Up (Side 2 Left)'},
	106: {name: 'Dungeon Graphics - Stairs Down (Side 2 Left)'},
	107: {name: 'Dungeon Graphics - Stairs (Side 1)'},
	108: {name: 'Door Graphics 0 (Front 3) (Porticullis)'},
	109: {name: 'Door Graphics 0 (Front 2) (Porticullis)'},
	110: {name: 'Door Graphics 0 (Front 1) (Porticullis)'},
	111: {name: 'Door Graphics 1 (Front 3) (Wooden Door)'},
	112: {name: 'Door Graphics 1 (Front 2) (Wooden Door)'},
	113: {name: 'Door Graphics 1 (Front 1) (Wooden Door)'},
	114: {name: 'Door Graphics 2 (Front 3) (Iron Door)'},
	115: {name: 'Door Graphics 2 (Front 2) (Iron Door)'},
	116: {name: 'Door Graphics 2 (Front 1) (Iron Door)'},
	117: {name: 'Door Graphics 3 (Front 3) (Ra Door)'},
	118: {name: 'Door Graphics 3 (Front 2) (Ra Door)'},
	119: {name: 'Door Graphics 3 (Front 1) (Ra Door)'},
	120: {name: 'Font Used For Wall Texts'},
	121: {name: 'Wall Ornate 00 (Left Side) (Unreadable Wall Inscription)'},
	122: {name: 'Wall Ornate 00 (Front) (Unreadable Wall Inscription)'},
	123: {name: 'Wall Ornate 01 (Left Side) (Square Alcove)'},
	124: {name: 'Wall Ornate 01 (Front) (Square Alcove)'},
	125: {name: 'Wall Ornate 02 (Left Side) (Vi Altar)'},
	126: {name: 'Wall Ornate 02 (Front) (Vi Altar)'},
	127: {name: 'Wall Ornate 03 (Left Side) (Arched Alcove)'},
	128: {name: 'Wall Ornate 03 (Front) (Arched Alcove)'},
	129: {name: 'Wall Ornate 04 (Left Side) (Hook)'},
	130: {name: 'Wall Ornate 04 (Front) (Hook)'},
	131: {name: 'Wall Ornate 05 (Left Side) (Iron Lock)'},
	132: {name: 'Wall Ornate 05 (Front) (Iron Lock)'},
	133: {name: 'Wall Ornate 06 (Left Side) (Wood Ring)'},
	134: {name: 'Wall Ornate 06 (Front) (Wood Ring)'},
	135: {name: 'Wall Ornate 07 (Left Side) (Small Switch)'},
	136: {name: 'Wall Ornate 07 (Front) (Small Switch)'},
	137: {name: 'Wall Ornate 08 (Left Side) (Dent 1)'},
	138: {name: 'Wall Ornate 08 (Front) (Dent 1)'},
	139: {name: 'Wall Ornate 09 (Left Side) (Dent 2)'},
	140: {name: 'Wall Ornate 09 (Front) (Dent 2)'},
	141: {name: 'Wall Ornate 10 (Left Side) (Iron Ring)'},
	142: {name: 'Wall Ornate 10 (Front) (Iron Ring)'},
	143: {name: 'Wall Ornate 11 (Left Side) (Crack)'},
	144: {name: 'Wall Ornate 11 (Front) (Crack)'},
	145: {name: 'Wall Ornate 12 (Left Side) (Slime Outlet)'},
	146: {name: 'Wall Ornate 12 (Front) (Slime Outlet)'},
	147: {name: 'Wall Ornate 13 (Left Side) (Dent 3)'},
	148: {name: 'Wall Ornate 13 (Front) (Dent 3)'},
	149: {name: 'Wall Ornate 14 (Left Side) (Tiny Switch)'},
	150: {name: 'Wall Ornate 14 (Front) (Tiny Switch)'},
	151: {name: 'Wall Ornate 15 (Left Side) (Green Switch Out)'},
	152: {name: 'Wall Ornate 15 (Front) (Green Switch Out)'},
	153: {name: 'Wall Ornate 16 (Left Side) (Blue Switch Out)'},
	154: {name: 'Wall Ornate 16 (Front) (Blue Switch Out)'},
	155: {name: 'Wall Ornate 17 (Left Side) (Coin Slot)'},
	156: {name: 'Wall Ornate 17 (Front) (Coin Slot)'},
	157: {name: 'Wall Ornate 18 (Left Side) (Double Iron Lock)'},
	158: {name: 'Wall Ornate 18 (Front) (Double Iron Lock)'},
	159: {name: 'Wall Ornate 19 (Left Side) (Square Lock)'},
	160: {name: 'Wall Ornate 19 (Front) (Square Lock)'},
	161: {name: 'Wall Ornate 20 (Left Side) (Winged Lock)'},
	162: {name: 'Wall Ornate 20 (Front) (Winged Lock)'},
	163: {name: 'Wall Ornate 21 (Left Side) (Onyx Lock)'},
	164: {name: 'Wall Ornate 21 (Front) (Onyx Lock)'},
	165: {name: 'Wall Ornate 22 (Left Side) (Stone Lock)'},
	166: {name: 'Wall Ornate 22 (Front) (Stone Lock)'},
	167: {name: 'Wall Ornate 23 (Left Side) (Cross Lock)'},
	168: {name: 'Wall Ornate 23 (Front) (Cross Lock)'},
	169: {name: 'Wall Ornate 24 (Left Side) (Topaz Lock)'},
	170: {name: 'Wall Ornate 24 (Front) (Topaz Lock)'},
	171: {name: 'Wall Ornate 25 (Left Side) (Skeleton Lock)'},
	172: {name: 'Wall Ornate 25 (Front) (Skeleton Lock)'},
	173: {name: 'Wall Ornate 26 (Left Side) (Gold Lock)'},
	174: {name: 'Wall Ornate 26 (Front) (Gold Lock)'},
	175: {name: 'Wall Ornate 27 (Left Side) (Tourquoise Lock)'},
	176: {name: 'Wall Ornate 27 (Front) (Tourquoise Lock)'},
	177: {name: 'Wall Ornate 28 (Left Side) (Emerald Lock)'},
	178: {name: 'Wall Ornate 28 (Front) (Emerald Lock)'},
	179: {name: 'Wall Ornate 29 (Left Side) (Ruby Lock)'},
	180: {name: 'Wall Ornate 29 (Front) (Ruby Lock)'},
	181: {name: 'Wall Ornate 30 (Left Side) (Ra Lock)'},
	182: {name: 'Wall Ornate 30 (Front) (Ra Lock)'},
	183: {name: 'Wall Ornate 31 (Left Side) (Master Lock)'},
	184: {name: 'Wall Ornate 31 (Front) (Master Lock)'},
	185: {name: 'Wall Ornate 32 (Left Side) (Gem Hole)'},
	186: {name: 'Wall Ornate 32 (Front) (Gem Hole)'},
	187: {name: 'Wall Ornate 33 (Left Side) (Slime)'},
	188: {name: 'Wall Ornate 33 (Front) (Slime)'},
	189: {name: 'Wall Ornate 34 (Left Side) (Grate)'},
	190: {name: 'Wall Ornate 34 (Front) (Grate)'},
	191: {name: 'Wall Ornate 35 (Left Side) (Fountain)'},
	192: {name: 'Wall Ornate 35 (Front) (Fountain)', palettes: palettesMainView, transparency: 10},
	193: {name: 'Wall Ornate 36 (Left Side) (Manacles)'},
	194: {name: 'Wall Ornate 36 (Front) (Manacles)'},
	195: {name: 'Wall Ornate 37 (Left Side) (Ghoul\'s Head)'},
	196: {name: 'Wall Ornate 37 (Front) (Ghoul\'s Head)'},
	197: {name: 'Wall Ornate 38 (Left Side) (Empty Torch Holder)'},
	198: {name: 'Wall Ornate 38 (Front) (Empty Torch Holder)'},
	199: {name: 'Wall Ornate 39 (Left Side) (Scratches)'},
	200: {name: 'Wall Ornate 39 (Front) (Scratches)'},
	201: {name: 'Wall Ornate 40 (Left Side) (Poison Holes)'},
	202: {name: 'Wall Ornate 40 (Front) (Poison Holes)'},
	203: {name: 'Wall Ornate 41 (Left Side) (Fireball Holes)'},
	204: {name: 'Wall Ornate 41 (Front) (Fireball Holes)'},
	205: {name: 'Wall Ornate 42 (Left Side) (Dagger Holes)'},
	206: {name: 'Wall Ornate 42 (Front) (Dagger Holes)'},
	207: {name: 'Wall Ornate 43 (Left Side) (Champion Mirror)'},
	208: {name: 'Wall Ornate 43 (Front) (Champion Mirror)'},
	209: {name: 'Wall Ornate 44 (Left Side) (Lever Up)'},
	210: {name: 'Wall Ornate 44 (Front) (Lever Up)'},
	211: {name: 'Wall Ornate 45 (Left Side) (Lever Down)'},
	212: {name: 'Wall Ornate 45 (Front) (Lever Down)'},
	213: {name: 'Wall Ornate 46 (Left Side) (Full Torch Holder)'},
	214: {name: 'Wall Ornate 46 (Front) (Full Torch Holder)'},
	215: {name: 'Wall Ornate 47 (Left Side) (Red Switch Out)'},
	216: {name: 'Wall Ornate 47 (Front) (Red Switch Out)'},
	217: {name: 'Wall Ornate 48 (Left Side) (Eye Switch)'},
	218: {name: 'Wall Ornate 48 (Front) (Eye Switch)'},
	219: {name: 'Wall Ornate 49 (Left Side) (Big Switch Out)'},
	220: {name: 'Wall Ornate 49 (Front) (Big Switch Out)'},
	221: {name: 'Wall Ornate 50 (Left Side) (Crack Switch Out)'},
	222: {name: 'Wall Ornate 50 (Front) (Crack Switch Out)'},
	223: {name: 'Wall Ornate 51 (Left Side) (Green Switch In)'},
	224: {name: 'Wall Ornate 51 (Front) (Green Switch In)'},
	225: {name: 'Wall Ornate 52 (Left Side) (Blue Switch In)'},
	226: {name: 'Wall Ornate 52 (Front) (Blue Switch In)'},
	227: {name: 'Wall Ornate 53 (Left Side) (Red Switch In)'},
	228: {name: 'Wall Ornate 53 (Front) (Red Switch In)'},
	229: {name: 'Wall Ornate 54 (Left Side) (Big Switch In)'},
	230: {name: 'Wall Ornate 54 (Front) (Big Switch In)'},
	231: {name: 'Wall Ornate 55 (Left Side) (Crack Switch In)'},
	232: {name: 'Wall Ornate 55 (Front) (Crack Switch In)'},
	233: {name: 'Wall Ornate 56 (Left Side) (Amalgam (Encased Gem))'},
	234: {name: 'Wall Ornate 56 (Front) (Amalgam (Encased Gem))'},
	235: {name: 'Wall Ornate 57 (Left Side) (Amalgam (Free Gem))'},
	236: {name: 'Wall Ornate 57 (Front) (Amalgam (Free Gem))'},
	237: {name: 'Wall Ornate 58 (Left Side) (Amalgam (Without Gem))'},
	238: {name: 'Wall Ornate 58 (Front) (Amalgam (Without Gem))'},
	239: {name: 'Wall Ornate 59 (Left Side) (Lord Order (Outside))'},
	240: {name: 'Wall Ornate 59 (Front) (Lord Order (Outside))'},
	241: {name: 'Floor ornate 00 (Left Side 3) (Footprints)'},
	242: {name: 'Floor ornate 00 (Front 3) (Footprints)'},
	243: {name: 'Floor ornate 00 (Left Side 2) (Footprints)'},
	244: {name: 'Floor ornate 00 (Front 2) (Footprints)'},
	245: {name: 'Floor ornate 00 (Left Side 1) (Footprints)'},
	246: {name: 'Floor ornate 00 (Front 1) (Footprints)'},
	247: {name: 'Floor ornate 01 (Left Side 3) (Square Grate)'},
	248: {name: 'Floor ornate 01 (Front 3) (Square Grate)'},
	249: {name: 'Floor ornate 01 (Left Side 2) (Square Grate)'},
	250: {name: 'Floor ornate 01 (Front 2) (Square Grate)'},
	251: {name: 'Floor ornate 01 (Left Side 1) (Square Grate)'},
	252: {name: 'Floor ornate 01 (Front 1) (Square Grate)'},
	253: {name: 'Floor ornate 02 (Left Side 3) (Square Pressure Pad)'},
	254: {name: 'Floor ornate 02 (Front 3) (Square Pressure Pad)'},
	255: {name: 'Floor ornate 02 (Left Side 2) (Square Pressure Pad)'},
	256: {name: 'Floor ornate 02 (Front 2) (Square Pressure Pad)'},
	257: {name: 'Floor ornate 02 (Left Side 1) (Square Pressure Pad)'},
	258: {name: 'Floor ornate 02 (Front 1) (Square Pressure Pad)'},
	259: {name: 'Floor ornate 03 (Left Side 3) (Moss)'},
	260: {name: 'Floor ornate 03 (Front 3) (Moss)'},
	261: {name: 'Floor ornate 03 (Left Side 2) (Moss)'},
	262: {name: 'Floor ornate 03 (Front 2) (Moss)'},
	263: {name: 'Floor ornate 03 (Left Side 1) (Moss)'},
	264: {name: 'Floor ornate 03 (Front 1) (Moss)'},
	265: {name: 'Floor ornate 04 (Left Side 3) (Round Grate)'},
	266: {name: 'Floor ornate 04 (Front 3) (Round Grate)'},
	267: {name: 'Floor ornate 04 (Left Side 2) (Round Grate)'},
	268: {name: 'Floor ornate 04 (Front 2) (Round Grate)'},
	269: {name: 'Floor ornate 04 (Left Side 1) (Round Grate)'},
	270: {name: 'Floor ornate 04 (Front 1) (Round Grate)'},
	271: {name: 'Floor ornate 05 (Left Side 3) (Round Pressure Plate)'},
	272: {name: 'Floor ornate 05 (Front 3) (Round Pressure Plate)'},
	273: {name: 'Floor ornate 05 (Left Side 2) (Round Pressure Plate)'},
	274: {name: 'Floor ornate 05 (Front 2) (Round Pressure Plate)'},
	275: {name: 'Floor ornate 05 (Left Side 1) (Round Pressure Plate)'},
	276: {name: 'Floor ornate 05 (Front 1) (Round Pressure Plate)'},
	277: {name: 'Floor ornate 06 (Left Side 3) (Black Flame Pit)'},
	278: {name: 'Floor ornate 06 (Front 3) (Black Flame Pit)'},
	279: {name: 'Floor ornate 06 (Left Side 2) (Black Flame Pit)'},
	280: {name: 'Floor ornate 06 (Front 2) (Black Flame Pit)'},
	281: {name: 'Floor ornate 06 (Left Side 1) (Black Flame Pit)'},
	282: {name: 'Floor ornate 06 (Front 1) (Black Flame Pit)'},
	283: {name: 'Floor ornate 07 (Left Side 3) (Crack)'},
	284: {name: 'Floor ornate 07 (Front 3) (Crack)'},
	285: {name: 'Floor ornate 07 (Left Side 2) (Crack)'},
	286: {name: 'Floor ornate 07 (Front 2) (Crack)'},
	287: {name: 'Floor ornate 07 (Left Side 1) (Crack)'},
	288: {name: 'Floor ornate 07 (Front 1) (Crack)'},
	289: {name: 'Floor ornate 08 (Left Side 3) (Tiny Pressure Pad)'},
	290: {name: 'Floor ornate 08 (Front 3) (Tiny Pressure Pad)'},
	291: {name: 'Floor ornate 08 (Left Side 2) (Tiny Pressure Pad)'},
	292: {name: 'Floor ornate 08 (Front 2) (Tiny Pressure Pad)'},
	293: {name: 'Floor ornate 08 (Left Side 1) (Tiny Pressure Pad)'},
	294: {name: 'Floor ornate 08 (Front 1) (Tiny Pressure Pad)'},
	295: {name: 'Floor ornate 09 (Left Side 3) (Puddle)'},
	296: {name: 'Floor ornate 09 (Front 3) (Puddle)'},
	297: {name: 'Floor ornate 09 (Left Side 2) (Puddle)'},
	298: {name: 'Floor ornate 09 (Front 2) (Puddle)'},
	299: {name: 'Floor ornate 09 (Left Side 1) (Puddle)'},
	300: {name: 'Floor ornate 09 (Front 1) (Puddle)'},
	301: {name: 'Door Mask 0 (Bashed Door)'},
	302: {name: 'Door Mask 1 ("See Through Walls" Spell)'},
	303: {name: 'Door Ornate 00 (Square Grid)'},
	304: {name: 'Door Ornate 01 (Iron Bars)'},
	305: {name: 'Door Ornate 02 (Jewels)'},
	306: {name: 'Door Ornate 03 (Wooden Bars)'},
	307: {name: 'Door Ornate 04 (Arched Grid)'},
	308: {name: 'Door Ornate 05 (Block Lock)'},
	309: {name: 'Door Ornate 06 (Corner Lock)'},
	310: {name: 'Door Ornate 07 (Black door (Dungeon Entrance))'},
	311: {name: 'Door Ornate 08 (Red Triangle Lock)'},
	312: {name: 'Door Ornate 09 (Triangle Lock)'},
	313: {name: 'Door Ornate 10 (Ra Door Energy)'},
	314: {name: 'Door Ornate 11 (Iron Door Damages)'},
	315: {name: 'Door Switch'},
	316: {name: 'Missile 00 (Front) (Arrow)'},
	317: {name: 'Missile 00 (Back) (Arrow)'},
	318: {name: 'Missile 00 (Side) (Arrow)'},
	319: {name: 'Missile 01 (Front) (Dagger)'},
	320: {name: 'Missile 01 (Back) (Dagger)'},
	321: {name: 'Missile 01 (Side) (Dagger)'},
	322: {name: 'Missile 02 (Front) (Axe - Hardcleave)'},
	323: {name: 'Missile 02 (Back) (Axe - Hardcleave)'},
	324: {name: 'Missile 02 (Side) (Axe - Hardcleave)'},
	325: {name: 'Missile 03 (Front) (Lightning bolt)'},
	326: {name: 'Missile 03 (Side) (Lightning bolt)'},
	327: {name: 'Missile 04 (Front) (Slayer)'},
	328: {name: 'Missile 04 (Back) (Slayer)'},
	329: {name: 'Missile 04 (Side) (Slayer)'},
	330: {name: 'Missile 05 (Front) (Stone Club)'},
	331: {name: 'Missile 05 (Back) (Stone Club)'},
	332: {name: 'Missile 05 (Side) (Stone Club)'},
	333: {name: 'Missile 06 (Front) (Club)'},
	334: {name: 'Missile 06 (Back) (Club)'},
	335: {name: 'Missile 06 (Side) (Club)'},
	336: {name: 'Missile 07 (Front) (Poison Dart)'},
	337: {name: 'Missile 07 (Back) (Poison Dart)'},
	338: {name: 'Missile 07 (Side) (Poison Dart)'},
	339: {name: 'Missile 08 (Front) (Bolt Blade - Delta - Diamond Edge - Falchion - Fury - Rapier - Sabre - Samurai Sword - Sword - The Inquisitor)'},
	340: {name: 'Missile 08 (Back) (Bolt Blade - Delta - Diamond Edge - Falchion - Fury - Rapier - Sabre - Samurai Sword - Sword - The Inquisitor)'},
	341: {name: 'Missile 08 (Side) (Bolt Blade - Delta - Diamond Edge - Falchion - Fury - Rapier - Sabre - Samurai Sword - Sword - The Inquisitor)'},
	342: {name: 'Missile 09 (Front) (Throwing Star)'},
	343: {name: 'Missile 09 (Side) (Throwing Star)'},
	344: {name: 'Missile 10 (Front) (Fireball)'},
	345: {name: 'Missile 11 (Front) (Antimaterial)'},
	346: {name: 'Missile 12 (Front) (Poison Blob)'},
	347: {name: 'Missile 13 (Front) (Poison)'},
	348: {name: 'Explosion 0 (Fireball)'},
	349: {name: 'Explosion 1 (Antimaterial)'},
	350: {name: 'Explosion 2 (Poison)'},
	351: {name: 'Explosion 0 (Light) (Fireball)'},
	352: {name: 'Explosion 0 (Medium) (Fireball)'},
	353: {name: 'Explosion 0 (Strong) (Fireball)'},
	354: {name: 'Explosion 1 (Light) (Antimaterial)'},
	355: {name: 'Explosion 1 (Medium) (Antimaterial)'},
	356: {name: 'Explosion 1 (Strong) (Antimaterial)'},
	357: {name: 'Explosion 2 (Light) (Poison)'},
	358: {name: 'Explosion 2 (Medium) (Poison)'},
	359: {name: 'Explosion 2 (Strong) (Poison)'},
	360: {name: 'Item on floor 00 (Chest On Floor)'},
	361: {name: 'Item on floor 01 (Chest In Alcove)'},
	362: {name: 'Item on floor 02 (Scroll)'},
	363: {name: 'Item on floor 03 (Bro Potion - Dane Potion - Ee Potion - Ku Potion - Ma Potion - Neta Potion - Ros Potion - Vi Potion - Water Flask - Ya Potion)'},
	364: {name: 'Item on floor 04 (Blue Gem)'},
	365: {name: 'Item on floor 05 (Copper Coin - Gold Coin)'},
	366: {name: 'Item on floor 06 (Drumstick)'},
	367: {name: 'Item on floor 07 (Waterskin (Full))'},
	368: {name: 'Item on floor 08 (Elven Doublet - Elven Huke)'},
	369: {name: 'Item on floor 09 (Leather Boots)'},
	370: {name: 'Item on floor 10 (Basinet - Bezerker Helm - Casque \'n Coif - Dexhelm - Helm Of Darc - Helmet)'},
	371: {name: 'Item on floor 11 (Large Shield - Shield Of Darc - Shield Of Lyte - Wooden Shield)'},
	372: {name: 'Item on floor 12 (Sling - Snake Staff - Staff - Staff Of Claws - Staff Of Manar - Yew Staff)'},
	373: {name: 'Item on floor 13 (Bolt Blade - Delta - Diamond Edge - Falchion - Fury - Rapier - Sabre - Samurai Sword - Sword - The Inquisitor)'},
	374: {name: 'Item on floor 14 (Axe - Hardcleave)'},
	375: {name: 'Item on floor 15 (Bow)'},
	376: {name: 'Item on floor 16 (Ekkhard Cross - Gem Of Ages - Illumulet - Jewel Symal)'},
	377: {name: 'Item on floor 17 (Arrow)'},
	378: {name: 'Item on floor 18 (Dagger)'},
	379: {name: 'Item on floor 19 (Cross Key - Iron Key - Key Of B - Onyx Key - Skeleton Key - Solid Key - Square Key - Tourquoise Key)'},
	380: {name: 'Item on floor 20 (Flamebain - Hosen - Leg Mail - Mail Aketon - Mithral Aketon - Mithral Mail)'},
	381: {name: 'Item on floor 21 (Plate Of Darc - Plate Of Lyte - Torso Plate)', palettes: palettesMainView, transparency: 10},
	382: {name: 'Item on floor 22 (Mace - Mace Of Order)'},
	383: {name: 'Item on floor 23 (Leg Plate - Poleyn Of Darc - Poleyn Of Lyte - Powertowers)'},
	384: {name: 'Item on floor 24 (Barbarian Hide - Cape - Cloak Of Night - Leather Jerkin - Leather Pants)'},
	385: {name: 'Item on floor 25 (Fine Robe (Body) - Fine robe (Legs) - Ghi - Ghi Trousers - Robe (Body) - Robe (Legs) - Silk Shirt - Tabard)'},
	386: {name: 'Item on floor 26 (Bread)'},
	387: {name: 'Item on floor 27 (Cheese)'},
	388: {name: 'Item on floor 28 (Apple)'},
	389: {name: 'Item on floor 29 (Corn)'},
	390: {name: 'Item on floor 30 (Suede Boots)'},
	391: {name: 'Item on floor 31 (Sceptre of Lyf)'},
	392: {name: 'Item on floor 32 (Teowand - Wand)'},
	393: {name: 'Item on floor 33 (Dragon Spit)'},
	394: {name: 'Item on floor 34 (Morningstar)'},
	395: {name: 'Item on floor 35 (Compass)'},
	396: {name: 'Item on floor 36 (Torch)'},
	397: {name: 'Item on floor 37 (Waterskin (Empty))'},
	398: {name: 'Item on floor 38 (Flamitt)'},
	399: {name: 'Item on floor 39 (Eye Of Time - Stormring)'},
	400: {name: 'Item on floor 40 (The Firestaff)'},
	401: {name: 'Item on floor 41 (Ashes)'},
	402: {name: 'Item on floor 42 (Bones - Champion Bones)'},
	403: {name: 'Item on floor 43 (Vorpal Blade)'},
	404: {name: 'Item on floor 44 (Club)'},
	405: {name: 'Item on floor 45 (Stone Club)'},
	406: {name: 'Item on floor 46 (Crossbow - Speedbow)'},
	407: {name: 'Item on floor 47 (Slayer)'},
	408: {name: 'Item on floor 48 (Rock)'},
	409: {name: 'Item on floor 49 (Poison Dart)'},
	410: {name: 'Item on floor 50 (Throwing Star)'},
	411: {name: 'Item on floor 51 (Stick)'},
	412: {name: 'Item on floor 52 (The Conduit)'},
	413: {name: 'Item on floor 53 (Armet - Helm Of Lyte)'},
	414: {name: 'Item on floor 54 (Calista - Crown Of Nerra)'},
	415: {name: 'Item on floor 55 (Buckler - Hide Shield - Small Shield)'},
	416: {name: 'Item on floor 56 (Sandals)'},
	417: {name: 'Item on floor 57 (Foot Plate - Greave Of Darc - Greave Of Lyte)'},
	418: {name: 'Item on floor 58 (Elven Boots)'},
	419: {name: 'Item on floor 59 (Moonstone)'},
	420: {name: 'Item on floor 60 (Pendant Feral - The Hellion)'},
	421: {name: 'Item on floor 61 (Orange Gem)'},
	422: {name: 'Item on floor 62 (Green Gem)'},
	423: {name: 'Item on floor 63 (Emerald Key - Gold Key - Master Key - Ra Key - Ruby Key - Sapphire Key - Topaz Key - Winged Key)'},
	424: {name: 'Item on floor 64 (Magical Box (Green))'},
	425: {name: 'Item on floor 65 (Mirror of Dawn)'},
	426: {name: 'Item on floor 66 (Horn of Fear)'},
	427: {name: 'Item on floor 67 (Dragon Steack)'},
	428: {name: 'Item on floor 68 (Des Potion - Mon Potion - Sar Potion - Um Potion - Ven Potion - Zo Potion)'},
	429: {name: 'Item on floor 69 (Ful Bomb - Kath Bomb - Pew Bomb - Ra Bomb)'},
	430: {name: 'Item on floor 70 (Blue Pants - Gunna - Kirtle - Tunic)'},
	431: {name: 'Item on floor 71 (Worm Round)'},
	432: {name: 'Item on floor 72 (Screamer Slice)'},
	433: {name: 'Item on floor 73 (Rope)'},
	434: {name: 'Item on floor 74 (Rabbit\'s Foot)'},
	435: {name: 'Item on floor 75 (Corbamite - Zokathra Spell)'},
	436: {name: 'Item on floor 76 (Choker)'},
	437: {name: 'Item on floor 77 (Boulder)'},
	438: {name: 'Item on floor 78 (Lock Picks)'},
	439: {name: 'Item on floor 79 (Magnifier)'},
	440: {name: 'Item on floor 80 (Magical Box (Blue))'},
	441: {name: 'Item on floor 81 (Empty Flask)'},
	442: {name: 'Item on floor 82 (Boots of Speed)'},
	443: {name: 'Item on floor 83 (The Firestaff (Complete))'},
	444: {name: 'Item on floor 84 (Silver Coin)'},
	445: {name: 'Item on floor 85 (Halter)'},
	446: {name: 'Creature 00 (Front) (Giant Scorpion)'},
	447: {name: 'Creature 00 (Side) (Giant Scorpion)'},
	448: {name: 'Creature 00 (Back) (Giant Scorpion)'},
	449: {name: 'Creature 00 (Attack) (Giant Scorpion)'},
	450: {name: 'Creature 01 (Front) (Swamp Slime)'},
	451: {name: 'Creature 01 (Attack) (Swamp Slime)'},
	452: {name: 'Creature 02 (Front) (Giggler)'},
	453: {name: 'Creature 02 (Side) (Giggler)'},
	454: {name: 'Creature 02 (Back) (Giggler)'},
	455: {name: 'Creature 02 (Attack) (Giggler)'},
	456: {name: 'Creature 03 (Front) (Wizard Eye)'},
	457: {name: 'Creature 03 (Attack) (Wizard Eye)'},
	458: {name: 'Creature 04 (Front) (Pain Rat)'},
	459: {name: 'Creature 04 (Side) (Pain Rat)', palettes: palettesMainView, transparency: 4},
	460: {name: 'Creature 04 (Back) (Pain Rat)'},
	461: {name: 'Creature 04 (Attack) (Pain Rat)'},
	462: {name: 'Creature 05 (Front) (Ruster)'},
	463: {name: 'Creature 05 (Side) (Ruster)'},
	464: {name: 'Creature 05 (Back) (Ruster)'},
	465: {name: 'Creature 06 (Front) (Screamer)'},
	466: {name: 'Creature 06 (Attack) (Screamer)'},
	467: {name: 'Creature 07 (Front) (Rockpile)'},
	468: {name: 'Creature 07 (Attack) (Rockpile)'},
	469: {name: 'Creature 08 (Front) (Ghost)'},
	470: {name: 'Creature 08 (Attack) (Ghost)'},
	471: {name: 'Creature 09 (Front) (Stone Golem)', palettes: palettesMainView, transparency: 4},
	472: {name: 'Creature 09 (Side) (Stone Golem)'},
	473: {name: 'Creature 09 (Back) (Stone Golem)'},
	474: {name: 'Creature 09 (Attack) (Stone Golem)'},
	475: {name: 'Creature 10 (Front) (Mummy)', palettes: palettesMainView, transparency: 4},
	476: {name: 'Creature 10 (Side) (Mummy)'},
	477: {name: 'Creature 10 (Back) (Mummy)'},
	478: {name: 'Creature 10 (Attack) (Mummy)'},
	479: {name: 'Creature 11 (Front) (Black Flame)'},
	480: {name: 'Creature 11 (Attack) (Black Flame)'},
	481: {name: 'Creature 12 (Front) (Skeleton)', palettes: palettesMainView, transparency: 4},
	482: {name: 'Creature 12 (Side) (Skeleton)'},
	483: {name: 'Creature 12 (Back) (Skeleton)'},
	484: {name: 'Creature 12 (Attack) (Skeleton)'},
	485: {name: 'Creature 13 (Front) (Couatl)'},
	486: {name: 'Creature 13 (Side) (Couatl)'},
	487: {name: 'Creature 13 (Back) (Couatl)'},
	488: {name: 'Creature 13 (Attack) (Couatl)'},
	489: {name: 'Creature 14 (Front) (Vexirk)'},
	490: {name: 'Creature 14 (Side) (Vexirk)'},
	491: {name: 'Creature 14 (Back) (Vexirk)'},
	492: {name: 'Creature 14 (Attack) (Vexirk)'},
	493: {name: 'Creature 15 (Front) (Magenta Worm)'},
	494: {name: 'Creature 15 (Side) (Magenta Worm)'},
	495: {name: 'Creature 15 (Back) (Magenta Worm)'},
	496: {name: 'Creature 15 (Attack) (Magenta Worm)'},
	497: {name: 'Creature 16 (Front) (Trolin)'},
	498: {name: 'Creature 16 (Side) (Trolin)'},
	499: {name: 'Creature 16 (Back) (Trolin)'},
	500: {name: 'Creature 16 (Attack) (Trolin)'},
	501: {name: 'Creature 17 (Front) (Giant Wasp)'},
	502: {name: 'Creature 17 (Side) (Giant Wasp)'},
	503: {name: 'Creature 17 (Back) (Giant Wasp)'},
	504: {name: 'Creature 17 (Attack) (Giant Wasp)'},
	505: {name: 'Creature 18 (Front) (Animated Armour)'},
	506: {name: 'Creature 18 (Side) (Animated Armour)'},
	507: {name: 'Creature 18 (Back) (Animated Armour)'},
	508: {name: 'Creature 18 (Attack) (Animated Armour)'},
	509: {name: 'Creature 19 (Front1) (Materializer)'},
	510: {name: 'Creature 19 (Front2) (Materializer)'},
	511: {name: 'Creature 19 (Front3) (Materializer)'},
	512: {name: 'Creature 19 (Attack) (Materializer)'},
	513: {name: 'Creature 20 (Front) (Water Elemental)'},
	514: {name: 'Creature 20 (Attack) (Water Elemental)'},
	515: {name: 'Creature 21 (Front) (Oitu)'},
	516: {name: 'Creature 21 (Side) (Oitu)'},
	517: {name: 'Creature 21 (Back) (Oitu)'},
	518: {name: 'Creature 21 (Attack) (Oitu)'},
	519: {name: 'Creature 22 (Front) (Demon)'},
	520: {name: 'Creature 22 (Side) (Demon)'},
	521: {name: 'Creature 22 (Back) (Demon)'},
	522: {name: 'Creature 22 (Attack) (Demon)'},
	523: {name: 'Creature 23 (Front) (Lord Chaos)'},
	524: {name: 'Creature 23 (Side) (Lord Chaos)'},
	525: {name: 'Creature 23 (Back) (Lord Chaos)'},
	526: {name: 'Creature 23 (Attack) (Lord Chaos)'},
	527: {name: 'Creature 24 (Front) (Red Dragon)'},
	528: {name: 'Creature 24 (Side) (Red Dragon)'},
	529: {name: 'Creature 24 (Back) (Red Dragon)'},
	530: {name: 'Creature 24 (Attack) (Red Dragon)'},
	531: {name: 'Creature 25 (Front) (Lord Order)'},
	532: {name: 'Creature 26 (Front) (Grey Lord)'},
};

// SND1: 21 (533-537, 539-547, 549-555)
// PCM (Pulse Code Modulation) 4 bits mono unsigned. Frequencies: 5486 Hz except front door (4237 Hz)
const ratesDefault = [5486];
const ratesDoors = [5486, 4237];
const soundsIndex = {
	533: {name: 'Falling item'},
	534: {name: 'Switch'},
	535: {name: 'Door', rates: ratesDoors},
	536: {name: 'Trolin attack / Stone golem attack / Touch wall'},
	537: {name: 'Exploding fireball'},
	539: {name: 'Falling and dying'},
	540: {name: 'Swallowing'},
	541: {name: 'Champion wounded 1'},
	542: {name: 'Champion wounded 2'},
	543: {name: 'Champion wounded 3'},
	544: {name: 'Champion wounded 4'},
	545: {name: 'Exploding spell'},
	546: {name: 'Skeleton attack / armour attack / slash'},
	547: {name: 'Teleport'},
	549: {name: 'Running into a wall'},
	550: {name: 'Rat attack / Dragon attack'},
	551: {name: 'Mummy attack / Ghost attack'},
	552: {name: 'Screamer attack / Oitu attack'},
	553: {name: 'Scorpion attack'},
	554: {name: 'Worm attack'},
	555: {name: 'Giggler'},
};
