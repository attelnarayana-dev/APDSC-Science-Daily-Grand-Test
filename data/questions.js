const QUESTIONS = [
  {
    id:"PS-001",subject:"Physical Science",topic:"Measurement",
    q:"What is the SI unit of length?",te:"పొడవు యొక్క SI ప్రమాణం ఏది?",
    o:["Metre","Kilometre","Centimetre","Millimetre"],a:0,
    e:"The SI unit of length is metre (m)."
  },
  {
    id:"PS-002",subject:"Physical Science",topic:"Measurement",
    q:"Which instrument is commonly used to measure temperature?",te:"ఉష్ణోగ్రతను కొలవడానికి సాధారణంగా ఏ పరికరాన్ని ఉపయోగిస్తారు?",
    o:["Thermometer","Barometer","Ammeter","Lactometer"],a:0,
    e:"A thermometer is used to measure temperature."
  },
  {
    id:"PS-003",subject:"Physical Science",topic:"Motion",
    q:"The rate of change of distance with time is called",te:"కాలంతో దూరం మారే రేటును ఏమంటారు?",
    o:["Speed","Force","Work","Pressure"],a:0,
    e:"Speed is distance travelled per unit time."
  },
  {
    id:"PS-004",subject:"Physical Science",topic:"Motion",
    q:"What is the SI unit of velocity?",te:"వేగం యొక్క SI ప్రమాణం ఏది?",
    o:["m/s","km","N","J"],a:0,
    e:"Velocity is measured in metres per second."
  },
  {
    id:"PS-005",subject:"Physical Science",topic:"Force",
    q:"The SI unit of force is",te:"బలానికి SI ప్రమాణం ఏది?",
    o:["Newton","Joule","Watt","Pascal"],a:0,
    e:"Force is measured in newtons (N)."
  },
  {
    id:"PS-006",subject:"Physical Science",topic:"Pressure",
    q:"Pressure is defined as",te:"పీడనాన్ని ఎలా నిర్వచిస్తారు?",
    o:["Force per unit area","Mass per unit volume","Work per unit time","Distance per unit time"],a:0,
    e:"Pressure equals force divided by area."
  },
  {
    id:"PS-007",subject:"Physical Science",topic:"Gravitation",
    q:"The force that attracts objects towards Earth is",te:"వస్తువులను భూమి వైపు ఆకర్షించే బలాన్ని ఏమంటారు?",
    o:["Gravitational force","Magnetic force","Frictional force","Muscular force"],a:0,
    e:"Earth attracts objects through gravitational force."
  },
  {
    id:"PS-008",subject:"Physical Science",topic:"Work",
    q:"The SI unit of work is",te:"పని యొక్క SI ప్రమాణం ఏది?",
    o:["Joule","Newton","Watt","Pascal"],a:0,
    e:"The SI unit of work is joule."
  },
  {
    id:"PS-009",subject:"Physical Science",topic:"Energy",
    q:"Energy possessed by an object due to its motion is",te:"వస్తువు చలనంలో ఉండటం వల్ల కలిగే శక్తిని ఏమంటారు?",
    o:["Kinetic energy","Potential energy","Chemical energy","Nuclear energy"],a:0,
    e:"Moving objects possess kinetic energy."
  },
  {
    id:"PS-010",subject:"Physical Science",topic:"Power",
    q:"The rate of doing work is called",te:"పని చేసే రేటును ఏమంటారు?",
    o:["Power","Energy","Force","Pressure"],a:0,
    e:"Power is the rate at which work is done."
  },

  {
    id:"PS-011",subject:"Physical Science",topic:"Sound",
    q:"Sound cannot travel through",te:"ధ్వని దేని ద్వారా ప్రయాణించలేదు?",
    o:["Vacuum","Solid","Liquid","Gas"],a:0,
    e:"Sound requires a material medium and cannot travel through vacuum."
  },
  {
    id:"PS-012",subject:"Physical Science",topic:"Sound",
    q:"The number of vibrations per second is called",te:"ఒక సెకనులో జరిగే కంపనాల సంఖ్యను ఏమంటారు?",
    o:["Frequency","Amplitude","Wavelength","Velocity"],a:0,
    e:"Frequency is the number of vibrations per second."
  },
  {
    id:"PS-013",subject:"Physical Science",topic:"Heat",
    q:"Heat naturally flows from",te:"వేడి సహజంగా ఎక్కడి నుంచి ఎక్కడికి ప్రవహిస్తుంది?",
    o:["Hot body to cold body","Cold body to hot body","Low pressure to high pressure","Vacuum to matter"],a:0,
    e:"Heat flows spontaneously from higher to lower temperature."
  },
  {
    id:"PS-014",subject:"Physical Science",topic:"Heat",
    q:"Which method of heat transfer occurs mainly in fluids?",te:"ద్రవాలు మరియు వాయువులలో ప్రధానంగా జరిగే ఉష్ణ బదిలీ ఏది?",
    o:["Convection","Conduction","Radiation","Reflection"],a:0,
    e:"Convection transfers heat through bulk movement of fluids."
  },
  {
    id:"PS-015",subject:"Physical Science",topic:"Light",
    q:"Light travels fastest in",te:"కాంతి అత్యంత వేగంగా దేనిలో ప్రయాణిస్తుంది?",
    o:["Vacuum","Water","Glass","Diamond"],a:0,
    e:"Light has its maximum speed in vacuum."
  },
  {
    id:"PS-016",subject:"Physical Science",topic:"Light",
    q:"The bouncing back of light from a surface is called",te:"ఉపరితలం నుంచి కాంతి తిరిగి వెనక్కి రావడాన్ని ఏమంటారు?",
    o:["Reflection","Refraction","Dispersion","Diffraction"],a:0,
    e:"Reflection is the bouncing back of light."
  },
  {
    id:"PS-017",subject:"Physical Science",topic:"Light",
    q:"A convex lens is generally used to",te:"కుంభాకార కటకం సాధారణంగా దేనికి ఉపయోగిస్తారు?",
    o:["Converge light","Block light","Produce sound","Measure current"],a:0,
    e:"A convex lens converges parallel rays of light."
  },
  {
    id:"PS-018",subject:"Physical Science",topic:"Electricity",
    q:"The SI unit of electric current is",te:"విద్యుత్ ప్రవాహం యొక్క SI ప్రమాణం ఏది?",
    o:["Ampere","Volt","Ohm","Watt"],a:0,
    e:"Electric current is measured in amperes."
  },
  {
    id:"PS-019",subject:"Physical Science",topic:"Electricity",
    q:"The SI unit of resistance is",te:"విద్యుత్ నిరోధానికి SI ప్రమాణం ఏది?",
    o:["Ohm","Volt","Ampere","Coulomb"],a:0,
    e:"Electrical resistance is measured in ohms."
  },
  {
    id:"PS-020",subject:"Physical Science",topic:"Electricity",
    q:"A device used to measure electric current is",te:"విద్యుత్ ప్రవాహాన్ని కొలిచే పరికరం ఏది?",
    o:["Ammeter","Voltmeter","Thermometer","Barometer"],a:0,
    e:"An ammeter measures electric current."
  },

  {
    id:"PS-021",subject:"Physical Science",topic:"Magnetism",
    q:"Like magnetic poles",te:"ఒకే రకమైన అయస్కాంత ధ్రువాలు",
    o:["Repel each other","Attract each other","Have no force","Become neutral"],a:0,
    e:"Like magnetic poles repel each other."
  },
  {
    id:"PS-022",subject:"Physical Science",topic:"Electromagnetism",
    q:"An electromagnet is produced by passing current through",te:"విద్యుత్ ప్రవాహాన్ని దేనిలో పంపడం ద్వారా విద్యుదయస్కాంతం ఏర్పడుతుంది?",
    o:["A coil of wire","A glass rod","A plastic sheet","A wooden block"],a:0,
    e:"Current through a coil produces a magnetic field."
  },
  {
    id:"PS-023",subject:"Physical Science",topic:"Matter",
    q:"Which state of matter has a definite volume but no definite shape?",te:"నిర్దిష్ట ఘనపరిమాణం ఉండి నిర్దిష్ట ఆకారం లేని పదార్థ స్థితి ఏది?",
    o:["Liquid","Solid","Gas","Plasma"],a:0,
    e:"Liquids have definite volume but take the shape of their container."
  },
  {
    id:"PS-024",subject:"Physical Science",topic:"Atoms",
    q:"The negatively charged particle in an atom is",te:"పరమాణువులో ఋణావేశం కలిగిన కణం ఏది?",
    o:["Electron","Proton","Neutron","Nucleus"],a:0,
    e:"Electrons carry negative charge."
  },
  {
    id:"PS-025",subject:"Physical Science",topic:"Atoms",
    q:"The positively charged particle in an atom is",te:"పరమాణువులో ధనావేశం కలిగిన కణం ఏది?",
    o:["Proton","Electron","Neutron","Photon"],a:0,
    e:"Protons carry positive charge."
  },

  {
    id:"BS-001",subject:"Biological Science",topic:"Life Processes",
    q:"The process by which green plants prepare food is",te:"ఆకుపచ్చ మొక్కలు ఆహారం తయారు చేసుకునే ప్రక్రియ ఏది?",
    o:["Photosynthesis","Respiration","Digestion","Excretion"],a:0,
    e:"Green plants prepare food by photosynthesis."
  },
  {
    id:"BS-002",subject:"Biological Science",topic:"Life Processes",
    q:"The green pigment necessary for photosynthesis is",te:"కిరణజన్య సంయోగక్రియకు అవసరమైన ఆకుపచ్చ వర్ణద్రవ్యం ఏది?",
    o:["Chlorophyll","Haemoglobin","Melanin","Keratin"],a:0,
    e:"Chlorophyll absorbs light energy for photosynthesis."
  },
  {
    id:"BS-003",subject:"Biological Science",topic:"Life Processes",
    q:"The main organ of digestion in humans is",te:"మానవులలో జీర్ణక్రియకు ప్రధాన అవయవం ఏది?",
    o:["Small intestine","Lung","Heart","Kidney"],a:0,
    e:"Most digestion and absorption occur in the small intestine."
  },
  {
    id:"BS-004",subject:"Biological Science",topic:"Respiration",
    q:"The gas required for aerobic respiration is",te:"ఏరోబిక్ శ్వాసక్రియకు అవసరమైన వాయువు ఏది?",
    o:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],a:0,
    e:"Aerobic respiration requires oxygen."
  },
  {
    id:"BS-005",subject:"Biological Science",topic:"Circulation",
    q:"Which organ pumps blood throughout the human body?",te:"మానవ శరీరం అంతటా రక్తాన్ని పంపే అవయవం ఏది?",
    o:["Heart","Liver","Kidney","Lung"],a:0,
    e:"The heart pumps blood through the circulatory system."
  },
  {
    id:"BS-006",subject:"Biological Science",topic:"Circulation",
    q:"Red blood cells mainly transport",te:"ఎర్ర రక్త కణాలు ప్రధానంగా దేనిని రవాణా చేస్తాయి?",
    o:["Oxygen","Hormones","Digestive enzymes","Urine"],a:0,
    e:"Haemoglobin in red blood cells transports oxygen."
  },
  {
    id:"BS-007",subject:"Biological Science",topic:"Excretion",
    q:"The main excretory organs in humans are",te:"మానవులలో ప్రధాన విసర్జక అవయవాలు ఏవి?",
    o:["Kidneys","Lungs","Heart","Stomach"],a:0,
    e:"Kidneys filter blood and form urine."
  },
  {
    id:"BS-008",subject:"Biological Science",topic:"Coordination",
    q:"The basic structural and functional unit of the nervous system is",te:"నాడీ వ్యవస్థ యొక్క నిర్మాణాత్మక మరియు క్రియాత్మక ప్రమాణం ఏది?",
    o:["Neuron","Nephron","Alveolus","Platelet"],a:0,
    e:"A neuron is the basic unit of the nervous system."
  },
  {
    id:"BS-009",subject:"Biological Science",topic:"Reproduction",
    q:"The reproductive structure of a flowering plant is",te:"పుష్పించే మొక్క యొక్క ప్రత్యుత్పత్తి నిర్మాణం ఏది?",
    o:["Flower","Root","Stem","Leaf"],a:0,
    e:"The flower contains the reproductive organs of flowering plants."
  },
  {
    id:"BS-010",subject:"Biological Science",topic:"Heredity",
    q:"The basic unit of heredity is",te:"వంశపారంపర్యత యొక్క ప్రాథమిక ప్రమాణం ఏది?",
    o:["Gene","Cell","Tissue","Organ"],a:0,
    e:"A gene is the basic unit of heredity."
  },

  {
    id:"BS-011",subject:"Biological Science",topic:"Cell Biology",
    q:"The powerhouse of the cell is",te:"కణానికి శక్తి కేంద్రం ఏది?",
    o:["Mitochondrion","Nucleus","Ribosome","Vacuole"],a:0,
    e:"Mitochondria produce ATP through cellular respiration."
  },
  {
    id:"BS-012",subject:"Biological Science",topic:"Cell Biology",
    q:"The control centre of a eukaryotic cell is",te:"యూకారియోటిక్ కణానికి నియంత్రణ కేంద్రం ఏది?",
    o:["Nucleus","Cell wall","Vacuole","Golgi body"],a:0,
    e:"The nucleus contains genetic material and controls cell activities."
  },
  {
    id:"BS-013",subject:"Biological Science",topic:"Cell Biology",
    q:"Cellulose is a major component of the",te:"సెల్యులోజ్ ప్రధానంగా దేనిలో ఉంటుంది?",
    o:["Plant cell wall","Animal cell membrane","Nucleus","Blood"],a:0,
    e:"Plant cell walls are largely made of cellulose."
  },
  {
    id:"BS-014",subject:"Biological Science",topic:"Microorganisms",
    q:"Which microorganism is commonly used in bread making?",te:"బ్రెడ్ తయారీలో సాధారణంగా ఉపయోగించే సూక్ష్మజీవి ఏది?",
    o:["Yeast","Virus","Algae","Protozoan"],a:0,
    e:"Yeast produces carbon dioxide during fermentation."
  },
  {
    id:"BS-015",subject:"Biological Science",topic:"Ecology",
    q:"Green plants in an ecosystem are called",te:"పర్యావరణ వ్యవస్థలో ఆకుపచ్చ మొక్కలను ఏమంటారు?",
    o:["Producers","Consumers","Decomposers","Parasites"],a:0,
    e:"Plants produce organic food and are therefore producers."
  },
  {
    id:"BS-016",subject:"Biological Science",topic:"Ecology",
    q:"A sequence showing transfer of food energy is called",te:"ఆహార శక్తి బదిలీని చూపించే క్రమాన్ని ఏమంటారు?",
    o:["Food chain","Food web","Water cycle","Nitrogen cycle"],a:0,
    e:"A food chain shows feeding relationships and energy transfer."
  },
  {
    id:"BS-017",subject:"Biological Science",topic:"Environment",
    q:"Which is a renewable natural resource?",te:"క్రింది వాటిలో పునరుత్పాదక సహజ వనరు ఏది?",
    o:["Solar energy","Coal","Petroleum","Natural gas"],a:0,
    e:"Solar energy is continuously replenished naturally."
  },
  {
    id:"BS-018",subject:"Biological Science",topic:"Environment",
    q:"The major gas responsible for the greenhouse effect among the following is",te:"క్రింది వాటిలో హరితగృహ ప్రభావానికి ప్రధానంగా కారణమయ్యే వాయువు ఏది?",
    o:["Carbon dioxide","Oxygen","Nitrogen","Helium"],a:0,
    e:"Carbon dioxide is an important greenhouse gas."
  },
  {
    id:"BS-019",subject:"Biological Science",topic:"Human Health",
    q:"Which blood cells help defend the body against infection?",te:"శరీరాన్ని సంక్రమణల నుండి రక్షించడంలో సహాయపడే రక్త కణాలు ఏవి?",
    o:["White blood cells","Red blood cells","Platelets","Plasma cells only"],a:0,
    e:"White blood cells participate in immune defence."
  },
  {
    id:"BS-020",subject:"Biological Science",topic:"Nutrition",
    q:"Deficiency of vitamin C causes",te:"విటమిన్ C లోపం వల్ల కలిగే వ్యాధి ఏది?",
    o:["Scurvy","Rickets","Night blindness","Beriberi"],a:0,
    e:"Vitamin C deficiency causes scurvy."
  }
];

window.QUESTIONS = QUESTIONS;

QUESTIONS.push(
{id:"PS-026",subject:"Physical Science",topic:"Measurement",q:"Which quantity is measured in kilograms?",te:"కిలోగ్రాములతో ఏ భౌతిక రాశిని కొలుస్తారు?",o:["Mass","Length","Time","Temperature"],a:0,e:"Kilogram is the SI unit of mass."},
{id:"PS-027",subject:"Physical Science",topic:"Measurement",q:"What is the SI unit of time?",te:"కాలానికి SI ప్రమాణం ఏది?",o:["Second","Minute","Hour","Day"],a:0,e:"The SI base unit of time is second."},
{id:"PS-028",subject:"Physical Science",topic:"Motion",q:"An object at rest has",te:"నిశ్చలంగా ఉన్న వస్తువుకు",o:["Zero velocity","Maximum velocity","Infinite velocity","Negative mass"],a:0,e:"An object at rest has zero velocity."},
{id:"PS-029",subject:"Physical Science",topic:"Motion",q:"The slope of a distance-time graph represents",te:"దూరం-కాల గ్రాఫ్ యొక్క వాలు దేనిని సూచిస్తుంది?",o:["Speed","Force","Mass","Pressure"],a:0,e:"The slope of a distance-time graph gives speed."},
{id:"PS-030",subject:"Physical Science",topic:"Motion",q:"Uniform motion means covering",te:"సమచలనంలో వస్తువు",o:["Equal distances in equal intervals of time","Unequal distances in equal time","No distance","Only vertical distance"],a:0,e:"Uniform motion covers equal distances in equal intervals."},
{id:"PS-031",subject:"Physical Science",topic:"Force",q:"Newton's first law is also called the law of",te:"న్యూటన్ మొదటి నియమాన్ని దేనికి సంబంధించిన నియమం అంటారు?",o:["Inertia","Energy","Pressure","Gravitation"],a:0,e:"Newton's first law describes inertia."},
{id:"PS-032",subject:"Physical Science",topic:"Force",q:"Friction generally acts",te:"ఘర్షణ బలం సాధారణంగా",o:["Opposite to relative motion","In the direction of motion","Only upward","Only downward"],a:0,e:"Friction opposes relative motion between surfaces."},
{id:"PS-033",subject:"Physical Science",topic:"Force",q:"Which surface generally produces greater friction?",te:"క్రింది వాటిలో సాధారణంగా ఎక్కువ ఘర్షణను కలిగించే ఉపరితలం ఏది?",o:["Rough surface","Smooth surface","Oily surface","Polished ice"],a:0,e:"Rough surfaces generally produce greater friction."},
{id:"PS-034",subject:"Physical Science",topic:"Pressure",q:"Why do sharp knives cut easily?",te:"పదునైన కత్తులు సులభంగా ఎందుకు కోస్తాయి?",o:["They exert greater pressure on a small area","They have greater mass","They reduce force","They produce heat"],a:0,e:"A smaller area produces greater pressure for the same force."},
{id:"PS-035",subject:"Physical Science",topic:"Pressure",q:"The SI unit of pressure is",te:"పీడనం యొక్క SI ప్రమాణం ఏది?",o:["Pascal","Newton","Joule","Watt"],a:0,e:"Pressure is measured in pascals."},

{id:"PS-036",subject:"Physical Science",topic:"Gravitation",q:"The weight of an object depends mainly on its",te:"వస్తువు బరువు ప్రధానంగా దేనిపై ఆధారపడి ఉంటుంది?",o:["Mass and gravitational acceleration","Colour","Volume only","Temperature only"],a:0,e:"Weight is mass multiplied by gravitational acceleration."},
{id:"PS-037",subject:"Physical Science",topic:"Gravitation",q:"The force between two masses is called",te:"రెండు ద్రవ్యరాశుల మధ్య ఉండే బలాన్ని ఏమంటారు?",o:["Gravitational force","Friction","Magnetic force","Elastic force"],a:0,e:"Masses attract each other gravitationally."},
{id:"PS-038",subject:"Physical Science",topic:"Work",q:"Work is done when a force causes",te:"బలం వల్ల ఏమి జరిగినప్పుడు పని జరుగుతుంది?",o:["Displacement","Only temperature change","Only colour change","No movement"],a:0,e:"Mechanical work requires displacement in the direction of force."},
{id:"PS-039",subject:"Physical Science",topic:"Energy",q:"Energy stored in a stretched spring is",te:"సాగదీసిన స్ప్రింగ్‌లో నిల్వ ఉండే శక్తి ఏది?",o:["Potential energy","Kinetic energy","Sound energy","Light energy"],a:0,e:"A stretched spring stores elastic potential energy."},
{id:"PS-040",subject:"Physical Science",topic:"Energy",q:"The energy stored in food is mainly",te:"ఆహారంలో ప్రధానంగా నిల్వ ఉండే శక్తి ఏది?",o:["Chemical energy","Sound energy","Electrical energy","Magnetic energy"],a:0,e:"Food stores chemical energy."},

{id:"PS-041",subject:"Physical Science",topic:"Sound",q:"Loudness of sound is related mainly to",te:"ధ్వని యొక్క తీవ్రత ప్రధానంగా దేనితో సంబంధం కలిగి ఉంటుంది?",o:["Amplitude","Frequency","Wavelength only","Speed only"],a:0,e:"Greater amplitude generally produces louder sound."},
{id:"PS-042",subject:"Physical Science",topic:"Sound",q:"Pitch of sound depends mainly on",te:"ధ్వని యొక్క శ్రుతి ప్రధానంగా దేనిపై ఆధారపడి ఉంటుంది?",o:["Frequency","Amplitude","Mass","Pressure"],a:0,e:"Pitch depends on frequency."},
{id:"PS-043",subject:"Physical Science",topic:"Sound",q:"Human beings normally hear frequencies approximately between",te:"మానవులు సాధారణంగా ఏ ఆవర్తన పరిధిలోని ధ్వనులను వింటారు?",o:["20 Hz and 20 kHz","1 Hz and 5 Hz","50 kHz and 100 kHz","0 Hz and 1 Hz"],a:0,e:"The usual human audible range is about 20 Hz to 20 kHz."},
{id:"PS-044",subject:"Physical Science",topic:"Sound",q:"An echo is caused by",te:"ప్రతిధ్వని దేనివల్ల ఏర్పడుతుంది?",o:["Reflection of sound","Refraction of light","Absorption of heat","Electric current"],a:0,e:"An echo results from reflected sound reaching the listener."},
{id:"PS-045",subject:"Physical Science",topic:"Heat",q:"Temperature is a measure related to the",te:"ఉష్ణోగ్రత దేనికి సంబంధించిన కొలత?",o:["Degree of hotness or coldness","Mass only","Volume only","Pressure only"],a:0,e:"Temperature indicates how hot or cold a body is."},

{id:"PS-046",subject:"Physical Science",topic:"Heat",q:"Heat transfer through direct contact is",te:"ప్రత్యక్ష సంపర్కం ద్వారా జరిగే ఉష్ణ బదిలీ ఏది?",o:["Conduction","Convection","Radiation","Reflection"],a:0,e:"Conduction transfers heat through direct contact."},
{id:"PS-047",subject:"Physical Science",topic:"Heat",q:"Heat from the Sun reaches Earth mainly by",te:"సూర్యుని నుండి భూమికి వేడి ప్రధానంగా ఎలా చేరుతుంది?",o:["Radiation","Conduction","Convection","Evaporation"],a:0,e:"Radiation can travel through the vacuum of space."},
{id:"PS-048",subject:"Physical Science",topic:"Heat",q:"Which is a good conductor of heat?",te:"క్రింది వాటిలో మంచి ఉష్ణ వాహకం ఏది?",o:["Copper","Wood","Rubber","Plastic"],a:0,e:"Copper conducts heat efficiently."},
{id:"PS-049",subject:"Physical Science",topic:"Heat",q:"Evaporation causes",te:"ఆవిరీభవనం వల్ల",o:["Cooling","Heating only","Freezing always","No temperature effect"],a:0,e:"Evaporation removes higher-energy molecules and causes cooling."},
{id:"PS-050",subject:"Physical Science",topic:"Light",q:"The splitting of white light into colours is called",te:"తెల్లని కాంతి వివిధ రంగులుగా విడిపోవడాన్ని ఏమంటారు?",o:["Dispersion","Reflection","Conduction","Magnetism"],a:0,e:"Dispersion separates white light into its component colours."},

{id:"PS-051",subject:"Physical Science",topic:"Light",q:"A rainbow is mainly produced due to",te:"ఇంద్రధనుస్సు ప్రధానంగా దేనివల్ల ఏర్పడుతుంది?",o:["Dispersion, refraction and reflection of sunlight","Only heating","Only magnetism","Electric conduction"],a:0,e:"Water droplets disperse sunlight and involve refraction and internal reflection."},
{id:"PS-052",subject:"Physical Science",topic:"Light",q:"A plane mirror forms an image that is",te:"సమతల దర్పణం ఏర్పరచే ప్రతిబింబం",o:["Virtual and erect","Always inverted","Always real","Always magnified"],a:0,e:"A plane mirror forms a virtual, erect image of equal size."},
{id:"PS-053",subject:"Physical Science",topic:"Light",q:"The bending of light when it passes between media is",te:"కాంతి ఒక మాధ్యమం నుంచి మరొక మాధ్యమంలోకి వెళ్లినప్పుడు వంగడాన్ని ఏమంటారు?",o:["Refraction","Reflection","Dispersion only","Absorption"],a:0,e:"Refraction is the bending of light due to a change in medium."},
{id:"PS-054",subject:"Physical Science",topic:"Electricity",q:"Potential difference is measured in",te:"విద్యుత్ పొటెన్షియల్ తేడాను దేనిలో కొలుస్తారు?",o:["Volt","Ampere","Ohm","Watt"],a:0,e:"Potential difference is measured in volts."},
{id:"PS-055",subject:"Physical Science",topic:"Electricity",q:"A voltmeter is connected",te:"వోల్ట్‌మీటర్‌ను సాధారణంగా ఎలా కలుపుతారు?",o:["In parallel","In series","Without a circuit","Only to earth"],a:0,e:"A voltmeter is connected in parallel across the component."},

{id:"PS-056",subject:"Physical Science",topic:"Electricity",q:"Ohm's law relates voltage, current and",te:"ఓమ్ నియమం వోల్టేజ్, విద్యుత్ ప్రవాహం మరియు దేనిని సంబంధపరుస్తుంది?",o:["Resistance","Mass","Temperature only","Sound"],a:0,e:"Ohm's law is V = IR."},
{id:"PS-057",subject:"Physical Science",topic:"Electricity",q:"A fuse protects an electrical circuit from",te:"ఫ్యూజ్ విద్యుత్ వలయాన్ని దేనినుంచి రక్షిస్తుంది?",o:["Excess current","Low temperature","Low light","Sound"],a:0,e:"A fuse melts when excessive current flows."},
{id:"PS-058",subject:"Physical Science",topic:"Magnetism",q:"The region around a magnet where magnetic force acts is",te:"అయస్కాంత బలం పనిచేసే అయస్కాంతం చుట్టూ ఉన్న ప్రాంతాన్ని ఏమంటారు?",o:["Magnetic field","Electric circuit","Pressure field","Heat zone"],a:0,e:"The magnetic field is the region of magnetic influence."},
{id:"PS-059",subject:"Physical Science",topic:"Magnetism",q:"A compass needle is a small",te:"దిక్సూచి సూది ఒక చిన్న",o:["Magnet","Battery","Resistor","Lens"],a:0,e:"A compass uses a freely rotating magnet."},
{id:"PS-060",subject:"Physical Science",topic:"Chemistry",q:"The smallest unit of an element that retains its chemical identity is",te:"మూలకం యొక్క రసాయన లక్షణాలను కలిగి ఉండే అతి చిన్న కణం ఏది?",o:["Atom","Cell","Tissue","Organ"],a:0,e:"An atom is the basic unit of an element."},

{id:"PS-061",subject:"Physical Science",topic:"Chemistry",q:"A substance with pH less than 7 is generally",te:"pH విలువ 7 కంటే తక్కువగా ఉన్న పదార్థం సాధారణంగా",o:["Acidic","Basic","Neutral","Metallic"],a:0,e:"Acidic solutions generally have pH below 7."},
{id:"PS-062",subject:"Physical Science",topic:"Chemistry",q:"A substance with pH greater than 7 is generally",te:"pH విలువ 7 కంటే ఎక్కువగా ఉన్న పదార్థం సాధారణంగా",o:["Basic","Acidic","Neutral","Pure water"],a:0,e:"Basic solutions generally have pH above 7."},
{id:"PS-063",subject:"Physical Science",topic:"Chemistry",q:"Common salt is chemically",te:"సాధారణ ఉప్పు యొక్క రసాయన నామం ఏది?",o:["Sodium chloride","Sodium carbonate","Calcium oxide","Potassium nitrate"],a:0,e:"Common salt is sodium chloride, NaCl."},
{id:"PS-064",subject:"Physical Science",topic:"Chemistry",q:"Which gas is released when an acid reacts with a carbonate?",te:"ఆమ్లం కార్బోనేట్‌తో చర్య జరిపినప్పుడు ఏ వాయువు విడుదలవుతుంది?",o:["Carbon dioxide","Oxygen","Nitrogen","Hydrogen"],a:0,e:"Acid-carbonate reactions release carbon dioxide."},
{id:"PS-065",subject:"Physical Science",topic:"Chemistry",q:"Rusting of iron requires oxygen and",te:"ఇనుము తుప్పు పట్టడానికి ఆక్సిజన్‌తో పాటు ఏమి అవసరం?",o:["Water or moisture","Nitrogen only","Helium","Carbon dioxide only"],a:0,e:"Rusting requires oxygen and moisture."},

{id:"PS-066",subject:"Physical Science",topic:"Chemistry",q:"Which metal is liquid at room temperature?",te:"గది ఉష్ణోగ్రత వద్ద ద్రవరూపంలో ఉండే లోహం ఏది?",o:["Mercury","Iron","Copper","Aluminium"],a:0,e:"Mercury is liquid at ordinary room temperature."},
{id:"PS-067",subject:"Physical Science",topic:"Chemistry",q:"Which non-metal conducts electricity well?",te:"విద్యుత్‌ను బాగా ప్రసరింపజేసే అలోహం ఏది?",o:["Graphite","Sulfur","Phosphorus","Iodine"],a:0,e:"Graphite, an allotrope of carbon, conducts electricity."},
{id:"PS-068",subject:"Physical Science",topic:"Periodic Table",q:"The modern periodic table is arranged mainly according to",te:"ఆధునిక ఆవర్తన పట్టిక ప్రధానంగా దేనిని ఆధారంగా చేసుకుని అమర్చబడింది?",o:["Atomic number","Atomic mass only","Density","Melting point"],a:0,e:"Elements are arranged in increasing atomic number."},
{id:"PS-069",subject:"Physical Science",topic:"Chemical Bonding",q:"A bond formed by transfer of electrons is",te:"ఎలక్ట్రాన్ల బదిలీ ద్వారా ఏర్పడే బంధం ఏది?",o:["Ionic bond","Covalent bond","Metallic bond only","Hydrogen bond only"],a:0,e:"Ionic bonding involves electron transfer and electrostatic attraction."},
{id:"PS-070",subject:"Physical Science",topic:"Chemical Bonding",q:"A covalent bond is formed by",te:"సహసంయోజక బంధం ఎలా ఏర్పడుతుంది?",o:["Sharing of electrons","Complete loss of all electrons","Only proton transfer","Neutron sharing"],a:0,e:"Covalent bonds involve sharing electron pairs."},

{id:"PS-071",subject:"Physical Science",topic:"Carbon",q:"The ability of carbon to form long chains is called",te:"కార్బన్ పొడవైన గొలుసులను ఏర్పరచే లక్షణాన్ని ఏమంటారు?",o:["Catenation","Ionisation","Neutralisation","Oxidation"],a:0,e:"Catenation is carbon's ability to bond with itself and form chains."},
{id:"PS-072",subject:"Physical Science",topic:"Carbon",q:"The major component of natural gas is",te:"సహజ వాయువులో ప్రధాన భాగం ఏది?",o:["Methane","Oxygen","Nitrogen","Carbon monoxide"],a:0,e:"Methane is the major component of natural gas."},
{id:"PS-073",subject:"Physical Science",topic:"Fuels",q:"Coal and petroleum are",te:"బొగ్గు మరియు పెట్రోలియం",o:["Fossil fuels","Renewable resources","Metals","Synthetic fibres"],a:0,e:"Coal and petroleum are fossil fuels formed over geological time."},
{id:"PS-074",subject:"Physical Science",topic:"Combustion",q:"The substance that supports combustion is usually",te:"దహనాన్ని సాధారణంగా ఏ వాయువు సమర్థిస్తుంది?",o:["Oxygen","Nitrogen","Helium","Hydrogen only"],a:0,e:"Oxygen supports combustion."},
{id:"PS-075",subject:"Physical Science",topic:"Air",q:"The most abundant gas in Earth's atmosphere is",te:"భూమి వాతావరణంలో అత్యధికంగా ఉన్న వాయువు ఏది?",o:["Nitrogen","Oxygen","Carbon dioxide","Argon"],a:0,e:"Nitrogen makes up about 78% of the atmosphere."},

{id:"PS-076",subject:"Physical Science",topic:"Metallurgy",q:"The extraction of metals from their ores is called",te:"ఖనిజాల నుంచి లోహాలను వెలికితీసే ప్రక్రియను ఏమంటారు?",o:["Metallurgy","Photosynthesis","Distillation","Respiration"],a:0,e:"Metallurgy deals with extraction and processing of metals."},
{id:"PS-077",subject:"Physical Science",topic:"Synthetic Fibres",q:"Nylon is a",te:"నైలాన్ ఒక",o:["Synthetic fibre","Natural fibre","Metal","Ceramic"],a:0,e:"Nylon is a synthetic polymer fibre."},
{id:"PS-078",subject:"Physical Science",topic:"Polymers",q:"A polymer is generally made of repeating units called",te:"పాలిమర్ సాధారణంగా పునరావృతమయ్యే ఏకకాలిక భాగాలతో ఏర్పడుతుంది?",o:["Monomers","Atoms only","Cells","Tissues"],a:0,e:"Polymers consist of repeating monomer units."},
{id:"PS-079",subject:"Physical Science",topic:"Matter",q:"Diffusion is fastest in",te:"వ్యాపనం ఏ స్థితిలో అత్యంత వేగంగా జరుగుతుంది?",o:["Gases","Solids","Only crystals","Vacuum"],a:0,e:"Particles in gases move freely and diffuse rapidly."},
{id:"PS-080",subject:"Physical Science",topic:"Chemical Reactions",q:"A reaction in which heat is released is called",te:"వేడి విడుదలయ్యే రసాయన చర్యను ఏమంటారు?",o:["Exothermic reaction","Endothermic reaction","Neutral reaction","Physical change"],a:0,e:"Exothermic reactions release heat."},

{id:"BS-021",subject:"Biological Science",topic:"Nutrition",q:"The nutrient mainly responsible for body growth and repair is",te:"శరీర పెరుగుదల మరియు మరమ్మతులకు ప్రధానంగా అవసరమైన పోషకం ఏది?",o:["Protein","Carbohydrate","Water","Mineral salt only"],a:0,e:"Proteins are essential for growth and tissue repair."},
{id:"BS-022",subject:"Biological Science",topic:"Nutrition",q:"The main immediate source of energy in the diet is",te:"ఆహారంలో తక్షణ శక్తికి ప్రధాన వనరు ఏది?",o:["Carbohydrates","Vitamins","Minerals","Water"],a:0,e:"Carbohydrates are a major immediate energy source."},
{id:"BS-023",subject:"Biological Science",topic:"Nutrition",q:"Vitamin D deficiency may cause",te:"విటమిన్ D లోపం వల్ల ఏ వ్యాధి కలగవచ్చు?",o:["Rickets","Scurvy","Scurvy only","Beriberi"],a:0,e:"Vitamin D deficiency can cause rickets in children."},
{id:"BS-024",subject:"Biological Science",topic:"Nutrition",q:"Iron deficiency commonly causes",te:"ఇనుము లోపం సాధారణంగా దేనికి దారితీస్తుంది?",o:["Anaemia","Rickets","Scurvy","Goitre"],a:0,e:"Iron deficiency can lead to iron-deficiency anaemia."},
{id:"BS-025",subject:"Biological Science",topic:"Digestion",q:"Saliva begins digestion of",te:"లాలాజలం ఏ పదార్థం జీర్ణక్రియను ప్రారంభిస్తుంది?",o:["Starch","Protein","Fat only","Minerals"],a:0,e:"Salivary amylase begins starch digestion in the mouth."},

{id:"BS-026",subject:"Biological Science",topic:"Digestion",q:"Bile is produced by the",te:"పైత్యరసం ఏ అవయవంలో ఉత్పత్తి అవుతుంది?",o:["Liver","Stomach","Pancreas","Kidney"],a:0,e:"The liver produces bile."},
{id:"BS-027",subject:"Biological Science",topic:"Digestion",q:"The pancreas secretes",te:"అగ్న్యాశయం ఏమి స్రవిస్తుంది?",o:["Digestive enzymes","Bile only","Urine","Red blood cells"],a:0,e:"The pancreas releases digestive enzymes into the small intestine."},
{id:"BS-028",subject:"Biological Science",topic:"Respiration",q:"The cellular organelle mainly involved in aerobic respiration is",te:"ఏరోబిక్ శ్వాసక్రియలో ప్రధానంగా పాల్గొనే కణాంగం ఏది?",o:["Mitochondrion","Ribosome","Vacuole","Cell wall"],a:0,e:"Mitochondria are major sites of aerobic respiration."},
{id:"BS-029",subject:"Biological Science",topic:"Respiration",q:"Anaerobic respiration occurs",te:"వాయురహిత శ్వాసక్రియ ఎప్పుడు జరుగుతుంది?",o:["Without oxygen","Only with excess oxygen","Only in sunlight","Only in bones"],a:0,e:"Anaerobic respiration occurs without oxygen."},
{id:"BS-030",subject:"Biological Science",topic:"Transport",q:"The blood vessel carrying blood away from the heart is",te:"గుండె నుంచి రక్తాన్ని బయటకు తీసుకెళ్లే రక్తనాళం ఏది?",o:["Artery","Vein","Capillary","Lymph vessel"],a:0,e:"Arteries carry blood away from the heart."},

{id:"BS-031",subject:"Biological Science",topic:"Transport",q:"The blood vessel that generally carries blood toward the heart is",te:"సాధారణంగా గుండె వైపు రక్తాన్ని తీసుకెళ్లే రక్తనాళం ఏది?",o:["Vein","Artery","Bronchus","Alveolus"],a:0,e:"Veins generally carry blood toward the heart."},
{id:"BS-032",subject:"Biological Science",topic:"Transport",q:"Platelets are mainly involved in",te:"రక్తఫలకాలు ప్రధానంగా దేనిలో పాల్గొంటాయి?",o:["Blood clotting","Oxygen transport","Digestion","Hormone production"],a:0,e:"Platelets help in blood clot formation."},
{id:"BS-033",subject:"Biological Science",topic:"Plant Transport",q:"Xylem mainly transports",te:"జైలమ్ ప్రధానంగా దేనిని రవాణా చేస్తుంది?",o:["Water and minerals","Food","Hormones only","Oxygen only"],a:0,e:"Xylem transports water and minerals from roots."},
{id:"BS-034",subject:"Biological Science",topic:"Plant Transport",q:"Phloem mainly transports",te:"ఫ్లోయం ప్రధానంగా దేనిని రవాణా చేస్తుంది?",o:["Food","Water only","Oxygen only","Carbon dioxide only"],a:0,e:"Phloem transports organic food substances."},
{id:"BS-035",subject:"Biological Science",topic:"Excretion",q:"The functional unit of the kidney is",te:"మూత్రపిండం యొక్క క్రియాత్మక ప్రమాణం ఏది?",o:["Nephron","Neuron","Alveolus","Villus"],a:0,e:"The nephron is the functional unit of the kidney."},

{id:"BS-036",subject:"Biological Science",topic:"Excretion",q:"Urine is stored temporarily in the",te:"మూత్రం తాత్కాలికంగా ఎక్కడ నిల్వ ఉంటుంది?",o:["Urinary bladder","Kidney","Liver","Ureter"],a:0,e:"The urinary bladder stores urine before elimination."},
{id:"BS-037",subject:"Biological Science",topic:"Coordination",q:"The hormone that regulates blood glucose is",te:"రక్తంలో గ్లూకోజ్ స్థాయిని నియంత్రించే హార్మోన్ ఏది?",o:["Insulin","Adrenaline","Thyroxine","Oestrogen"],a:0,e:"Insulin helps lower blood glucose levels."},
{id:"BS-038",subject:"Biological Science",topic:"Coordination",q:"The thyroid gland mainly secretes",te:"థైరాయిడ్ గ్రంథి ప్రధానంగా ఏ హార్మోన్‌ను స్రవిస్తుంది?",o:["Thyroxine","Insulin","Adrenaline","Testosterone"],a:0,e:"The thyroid gland produces thyroid hormones including thyroxine."},
{id:"BS-039",subject:"Biological Science",topic:"Coordination",q:"The central nervous system consists of",te:"కేంద్ర నాడీ వ్యవస్థలో ఏవి ఉంటాయి?",o:["Brain and spinal cord","Heart and brain","Nerves only","Muscles and bones"],a:0,e:"The central nervous system consists of brain and spinal cord."},
{id:"BS-040",subject:"Biological Science",topic:"Plant Hormones",q:"Auxin is a plant hormone associated with",te:"ఆక్సిన్ అనే మొక్క హార్మోన్ ప్రధానంగా దేనితో సంబంధం కలిగి ఉంటుంది?",o:["Growth","Blood clotting","Digestion","Hearing"],a:0,e:"Auxin regulates several aspects of plant growth."},

{id:"BS-041",subject:"Biological Science",topic:"Plant Movements",q:"Growth of a plant shoot toward light is",te:"మొక్క కొమ్మ కాంతి వైపు పెరగడాన్ని ఏమంటారు?",o:["Phototropism","Geotropism","Hydrotropism","Thigmotropism"],a:0,e:"Growth toward light is positive phototropism."},
{id:"BS-042",subject:"Biological Science",topic:"Reproduction",q:"Asexual reproduction generally involves",te:"అలైంగిక ప్రత్యుత్పత్తిలో సాధారణంగా",o:["One parent","Two parents","Three parents","No parent"],a:0,e:"Asexual reproduction usually involves a single parent."},
{id:"BS-043",subject:"Biological Science",topic:"Reproduction",q:"Binary fission is common in",te:"ద్విఖండనం సాధారణంగా దేనిలో కనిపిస్తుంది?",o:["Amoeba","Human","Mango tree","Frog"],a:0,e:"Amoeba commonly reproduces by binary fission."},
{id:"BS-044",subject:"Biological Science",topic:"Reproduction",q:"Pollination is the transfer of pollen from",te:"పరాగసంపర్కంలో పుప్పొడి ఎక్కడి నుంచి ఎక్కడికి బదిలీ అవుతుంది?",o:["Anther to stigma","Stigma to anther","Root to leaf","Ovary to root"],a:0,e:"Pollination is transfer of pollen from anther to stigma."},
{id:"BS-045",subject:"Biological Science",topic:"Reproduction",q:"The male reproductive part of a flower is",te:"పుష్పంలోని పురుష ప్రత్యుత్పత్తి భాగం ఏది?",o:["Stamen","Pistil","Sepal","Petal"],a:0,e:"The stamen is the male reproductive structure."},

{id:"BS-046",subject:"Biological Science",topic:"Reproduction",q:"The female reproductive part of a flower is",te:"పుష్పంలోని స్త్రీ ప్రత్యుత్పత్తి భాగం ఏది?",o:["Pistil","Stamen","Anther","Filament"],a:0,e:"The pistil or carpel is the female reproductive structure."},
{id:"BS-047",subject:"Biological Science",topic:"Reproduction",q:"Fertilization results in formation of",te:"ఫలదీకరణం వల్ల ఏది ఏర్పడుతుంది?",o:["Zygote","Pollen","Spore","Bud"],a:0,e:"Fusion of gametes produces a zygote."},
{id:"BS-048",subject:"Biological Science",topic:"Human Reproduction",q:"The male gamete in humans is",te:"మానవులలో పురుష సంయోగకణం ఏది?",o:["Sperm","Ovum","Zygote","Embryo"],a:0,e:"Sperm is the male gamete."},
{id:"BS-049",subject:"Biological Science",topic:"Human Reproduction",q:"The female gamete in humans is",te:"మానవులలో స్త్రీ సంయోగకణం ఏది?",o:["Ovum","Sperm","Zygote","Embryo"],a:0,e:"The ovum or egg is the female gamete."},
{id:"BS-050",subject:"Biological Science",topic:"Adolescence",q:"The period of major physical and reproductive changes is called",te:"శారీరక మరియు ప్రత్యుత్పత్తి మార్పులు ఎక్కువగా జరిగే దశను ఏమంటారు?",o:["Adolescence","Infancy","Old age","Adulthood only"],a:0,e:"Adolescence is a period of significant physical and reproductive changes."},

{id:"BS-051",subject:"Biological Science",topic:"Heredity",q:"Gregor Mendel conducted major inheritance experiments using",te:"గ్రెగర్ మెండల్ వారసత్వ ప్రయోగాలను ప్రధానంగా దేనిపై నిర్వహించాడు?",o:["Pea plants","Fruit flies","Bacteria","Mice"],a:0,e:"Mendel used pea plants in his classic experiments."},
{id:"BS-052",subject:"Biological Science",topic:"Heredity",q:"A trait that appears in a heterozygous condition is called",te:"హెటెరోజైగస్ స్థితిలో వ్యక్తమయ్యే లక్షణాన్ని ఏమంటారు?",o:["Dominant trait","Recessive trait","Acquired trait","Environmental trait"],a:0,e:"A dominant trait is expressed in a heterozygote."},
{id:"BS-053",subject:"Biological Science",topic:"Genetics",q:"DNA is mainly responsible for carrying",te:"DNA ప్రధానంగా దేనిని మోసుకుపోతుంది?",o:["Genetic information","Oxygen","Digestive juices","Water"],a:0,e:"DNA stores hereditary genetic information."},
{id:"BS-054",subject:"Biological Science",topic:"Evolution",q:"Darwin's theory emphasized",te:"డార్విన్ సిద్ధాంతం ప్రధానంగా దేనిని వివరించింది?",o:["Natural selection","Cell division only","Blood circulation","Photosynthesis"],a:0,e:"Darwin explained evolution through natural selection."},
{id:"BS-055",subject:"Biological Science",topic:"Evolution",q:"Lamarck proposed the idea of",te:"లామార్క్ ప్రధానంగా ఏ భావనను ప్రతిపాదించాడు?",o:["Inheritance of acquired characters","Natural selection","Cell theory","Germ theory"],a:0,e:"Lamarck proposed inheritance of acquired characteristics."},

{id:"BS-056",subject:"Biological Science",topic:"Living World",q:"A characteristic common to all living organisms is",te:"అన్ని జీవులలో కనిపించే సాధారణ లక్షణం ఏది?",o:["Metabolism","Metallic shine","Rusting","Combustion"],a:0,e:"Living organisms carry out metabolic activities."},
{id:"BS-057",subject:"Biological Science",topic:"Living World",q:"The scientific study of plants is called",te:"మొక్కల శాస్త్రీయ అధ్యయనాన్ని ఏమంటారు?",o:["Botany","Zoology","Ecology only","Geology"],a:0,e:"Botany is the study of plants."},
{id:"BS-058",subject:"Biological Science",topic:"Living World",q:"The scientific study of animals is called",te:"జంతువుల శాస్త్రీయ అధ్యయనాన్ని ఏమంటారు?",o:["Zoology","Botany","Physics","Geology"],a:0,e:"Zoology is the study of animals."},
{id:"BS-059",subject:"Biological Science",topic:"Cell Biology",q:"The cell membrane is mainly responsible for",te:"కణ త్వచం ప్రధానంగా ఏ పని చేస్తుంది?",o:["Regulating movement of substances","Producing bones","Pumping blood","Digesting food outside cell"],a:0,e:"The cell membrane controls movement of substances into and out of cells."},
{id:"BS-060",subject:"Biological Science",topic:"Cell Biology",q:"Ribosomes are mainly involved in",te:"రైబోసోములు ప్రధానంగా దేనిలో పాల్గొంటాయి?",o:["Protein synthesis","Photosynthesis","Blood clotting","Urine formation"],a:0,e:"Ribosomes are the sites of protein synthesis."},

{id:"BS-061",subject:"Biological Science",topic:"Cell Division",q:"Mitosis generally produces",te:"మైటోసిస్ సాధారణంగా ఎలాంటి కణాలను ఉత్పత్తి చేస్తుంది?",o:["Two genetically similar daughter cells","Four genetically different cells","One cell only","No daughter cells"],a:0,e:"Mitosis usually produces two genetically similar daughter cells."},
{id:"BS-062",subject:"Biological Science",topic:"Tissues",q:"A group of similar cells performing a common function is called",te:"సమానమైన కణాలు ఒకే విధమైన పని చేయడానికి ఏర్పడిన సమూహాన్ని ఏమంటారు?",o:["Tissue","Organ","Organism","System only"],a:0,e:"A tissue is a group of similar cells performing a common function."},
{id:"BS-063",subject:"Biological Science",topic:"Tissues",q:"Xylem and phloem are examples of",te:"జైలమ్ మరియు ఫ్లోయం ఏ రకమైన కణజాలాలు?",o:["Vascular tissues","Muscular tissues","Nervous tissues","Epithelial tissues"],a:0,e:"Xylem and phloem are vascular tissues in plants."},
{id:"BS-064",subject:"Biological Science",topic:"Microorganisms",q:"Lactobacillus is useful in making",te:"లాక్టోబాసిల్లస్ దేనిని తయారు చేయడంలో ఉపయోగకరం?",o:["Curd","Petrol","Plastic","Glass"],a:0,e:"Lactobacillus helps convert milk into curd."},
{id:"BS-065",subject:"Biological Science",topic:"Food Preservation",q:"Pasteurization is commonly associated with preservation of",te:"పాశ్చరైజేషన్ సాధారణంగా దేనిని సంరక్షించడానికి ఉపయోగిస్తారు?",o:["Milk","Iron","Wood","Glass"],a:0,e:"Pasteurization is widely used for milk and other beverages."},

{id:"BS-066",subject:"Biological Science",topic:"Agriculture",q:"The process of loosening and turning soil is called",te:"నేలను వదులుగా చేసి తిప్పే ప్రక్రియను ఏమంటారు?",o:["Ploughing","Harvesting","Storage","Irrigation"],a:0,e:"Ploughing prepares soil for sowing."},
{id:"BS-067",subject:"Biological Science",topic:"Agriculture",q:"The supply of water to crops at regular intervals is",te:"పంటలకు క్రమం తప్పకుండా నీరు అందించే ప్రక్రియ ఏది?",o:["Irrigation","Threshing","Weeding","Harvesting"],a:0,e:"Irrigation supplies water to crops."},
{id:"BS-068",subject:"Biological Science",topic:"Ecology",q:"Organisms that break down dead organic matter are",te:"చనిపోయిన సేంద్రియ పదార్థాలను విచ్ఛిన్నం చేసే జీవులను ఏమంటారు?",o:["Decomposers","Producers","Herbivores","Primary consumers"],a:0,e:"Decomposers break down dead organic matter."},
{id:"BS-069",subject:"Biological Science",topic:"Ecology",q:"A network of interconnected food chains is called",te:"పరస్పరం అనుసంధానమైన ఆహార గొలుసుల సమూహాన్ని ఏమంటారు?",o:["Food web","Food pyramid only","Water cycle","Habitat"],a:0,e:"A food web consists of interconnected food chains."},
{id:"BS-070",subject:"Biological Science",topic:"Ecology",q:"The place where an organism normally lives is its",te:"ఒక జీవి సాధారణంగా నివసించే ప్రదేశాన్ని ఏమంటారు?",o:["Habitat","Niche only","Population","Community"],a:0,e:"Habitat is the place where an organism lives."},

{id:"BS-071",subject:"Biological Science",topic:"Biodiversity",q:"The variety of living organisms in an area is called",te:"ఒక ప్రాంతంలోని వివిధ జీవుల వైవిధ్యాన్ని ఏమంటారు?",o:["Biodiversity","Pollution","Deforestation","Succession only"],a:0,e:"Biodiversity refers to variety of life."},
{id:"BS-072",subject:"Biological Science",topic:"Conservation",q:"Species found only in a particular geographical area are called",te:"ఒక నిర్దిష్ట భౌగోళిక ప్రాంతంలో మాత్రమే కనిపించే జాతులను ఏమంటారు?",o:["Endemic species","Cosmopolitan species","Domestic species","Artificial species"],a:0,e:"Endemic species are restricted to a particular region."},
{id:"BS-073",subject:"Biological Science",topic:"Conservation",q:"Cutting down forests on a large scale is called",te:"పెద్ద ఎత్తున అడవులను నరికివేయడాన్ని ఏమంటారు?",o:["Deforestation","Afforestation","Conservation","Reforestation"],a:0,e:"Deforestation is large-scale removal of forests."},
{id:"BS-074",subject:"Biological Science",topic:"Pollution",q:"Excessive nutrients in water causing algal growth is called",te:"నీటిలో అధిక పోషకాలు చేరి శైవలాల పెరుగుదలకు దారితీసే పరిస్థితిని ఏమంటారు?",o:["Eutrophication","Evaporation","Condensation","Transpiration"],a:0,e:"Eutrophication is nutrient enrichment that can cause excessive algal growth."},
{id:"BS-075",subject:"Biological Science",topic:"Pollution",q:"Acid rain is mainly associated with emissions of",te:"ఆమ్ల వర్షం ప్రధానంగా ఏ వాయువుల ఉద్గారాలతో సంబంధం కలిగి ఉంటుంది?",o:["Sulfur and nitrogen oxides","Oxygen and helium","Hydrogen only","Nitrogen only"],a:0,e:"Sulfur and nitrogen oxides can form acids in the atmosphere."},

{id:"BS-076",subject:"Biological Science",topic:"Environment",q:"The ozone layer protects life mainly from",te:"ఓజోన్ పొర జీవులను ప్రధానంగా దేనినుంచి రక్షిస్తుంది?",o:["Ultraviolet radiation","Sound waves","Visible light","Gravity"],a:0,e:"Stratospheric ozone absorbs much of the Sun's harmful UV radiation."},
{id:"BS-077",subject:"Biological Science",topic:"Environment",q:"The movement of nitrogen between organisms and the environment is part of",te:"జీవులు మరియు పర్యావరణం మధ్య నైట్రోజన్ మార్పిడిని ఏ చక్రం సూచిస్తుంది?",o:["Nitrogen cycle","Water cycle","Carbon cycle only","Rock cycle"],a:0,e:"The nitrogen cycle describes transformations and movement of nitrogen."},
{id:"BS-078",subject:"Biological Science",topic:"Human Health",q:"A balanced diet contains",te:"సమతుల ఆహారంలో",o:["All essential nutrients in appropriate amounts","Only carbohydrates","Only proteins","Only vitamins"],a:0,e:"A balanced diet provides essential nutrients in suitable proportions."},
{id:"BS-079",subject:"Biological Science",topic:"Human Health",q:"Vaccination helps the body develop",te:"టీకాలు శరీరంలో ఏమి అభివృద్ధి చేయడానికి సహాయపడతాయి?",o:["Specific immune protection","More bones","More red blood cells only","Digestive enzymes"],a:0,e:"Vaccination trains the immune system to recognize specific pathogens."},
{id:"BS-080",subject:"Biological Science",topic:"Human Health",q:"Sanitation is important mainly for",te:"పారిశుధ్యం ప్రధానంగా దేనికి ముఖ్యమైనది?",o:["Preventing spread of disease","Increasing pollution","Reducing oxygen","Increasing pathogens"],a:0,e:"Good sanitation reduces exposure to disease-causing organisms."},

{id:"BS-081",subject:"Biological Science",topic:"Human Anatomy",q:"The exchange of gases in human lungs occurs mainly in",te:"మానవ ఊపిరితిత్తుల్లో వాయువుల మార్పిడి ప్రధానంగా ఎక్కడ జరుగుతుంది?",o:["Alveoli","Trachea","Nose","Bronchi only"],a:0,e:"Alveoli provide the surface for gas exchange."},
{id:"BS-082",subject:"Biological Science",topic:"Human Anatomy",q:"The windpipe is called",te:"శ్వాసనాళాన్ని ఏమంటారు?",o:["Trachea","Oesophagus","Ureter","Artery"],a:0,e:"The trachea is the windpipe."},
{id:"BS-083",subject:"Biological Science",topic:"Human Anatomy",q:"The functional unit of the nervous system is",te:"నాడీ వ్యవస్థ యొక్క క్రియాత్మక ప్రమాణం ఏది?",o:["Neuron","Nephron","Alveolus","Villus"],a:0,e:"Neuron is the functional unit of the nervous system."},
{id:"BS-084",subject:"Biological Science",topic:"Human Anatomy",q:"The largest organ of the human body is",te:"మానవ శరీరంలో అతిపెద్ద అవయవం ఏది?",o:["Skin","Liver","Heart","Brain"],a:0,e:"Skin is the largest organ of the human body."},
{id:"BS-085",subject:"Biological Science",topic:"Human Anatomy",q:"The bone protecting the brain is the",te:"మెదడును రక్షించే ఎముక నిర్మాణం ఏది?",o:["Skull","Rib cage","Pelvis","Femur"],a:0,e:"The skull protects the brain."},

{id:"BS-086",subject:"Biological Science",topic:"Locomotion",q:"The place where two bones meet is called",te:"రెండు ఎముకలు కలిసే ప్రదేశాన్ని ఏమంటారు?",o:["Joint","Muscle","Tendon","Cartilage only"],a:0,e:"A joint is the meeting point of two or more bones."},
{id:"BS-087",subject:"Biological Science",topic:"Locomotion",q:"Muscles attached to bones generally help in",te:"ఎముకలకు అనుసంధానమైన కండరాలు ప్రధానంగా దేనికి సహాయపడతాయి?",o:["Movement","Digestion only","Blood filtration","Photosynthesis"],a:0,e:"Skeletal muscles produce body movement."},
{id:"BS-088",subject:"Biological Science",topic:"Animal Diversity",q:"Animals with a backbone are called",te:"వెన్నెముక కలిగిన జంతువులను ఏమంటారు?",o:["Vertebrates","Invertebrates","Protozoans","Molluscs only"],a:0,e:"Vertebrates possess a vertebral column."},
{id:"BS-089",subject:"Biological Science",topic:"Animal Diversity",q:"Animals without a backbone are called",te:"వెన్నెముక లేని జంతువులను ఏమంటారు?",o:["Invertebrates","Vertebrates","Mammals","Chordates only"],a:0,e:"Invertebrates lack a vertebral column."},
{id:"BS-090",subject:"Biological Science",topic:"Animal Diversity",q:"Which group includes mammals?",te:"క్రింది వాటిలో స్తన్యజంతువులను కలిగి ఉన్న వర్గం ఏది?",o:["Mammalia","Aves","Reptilia","Amphibia"],a:0,e:"Mammalia is the class containing mammals."},

{id:"BS-091",subject:"Biological Science",topic:"Animal Diversity",q:"Birds belong to the class",te:"పక్షులు ఏ తరగతికి చెందుతాయి?",o:["Aves","Mammalia","Reptilia","Pisces"],a:0,e:"Birds belong to class Aves."},
{id:"BS-092",subject:"Biological Science",topic:"Animal Diversity",q:"Frogs belong to the class",te:"కప్పలు ఏ తరగతికి చెందుతాయి?",o:["Amphibia","Reptilia","Mammalia","Aves"],a:0,e:"Frogs are amphibians."},
{id:"BS-093",subject:"Biological Science",topic:"Animal Diversity",q:"Snakes belong to the class",te:"పాములు ఏ తరగతికి చెందుతాయి?",o:["Reptilia","Amphibia","Mammalia","Aves"],a:0,e:"Snakes are reptiles."},
{id:"BS-094",subject:"Biological Science",topic:"Applied Biology",q:"The scientific study and use of microorganisms is associated with",te:"సూక్ష్మజీవుల శాస్త్రీయ అధ్యయనం మరియు వినియోగం ఏ రంగంతో సంబంధం కలిగి ఉంటుంది?",o:["Microbiology","Astronomy","Geology","Meteorology"],a:0,e:"Microbiology deals with microorganisms."},
{id:"BS-095",subject:"Biological Science",topic:"Biotechnology",q:"The use of living organisms or their components to make useful products is",te:"జీవులు లేదా వాటి భాగాలను ఉపయోగించి ఉపయోగకరమైన ఉత్పత్తులను తయారు చేసే శాస్త్రాన్ని ఏమంటారు?",o:["Biotechnology","Astronomy","Mechanics","Geography"],a:0,e:"Biotechnology uses biological systems for useful applications."},

{id:"BS-096",subject:"Biological Science",topic:"Molecular Biology",q:"RNA differs from DNA in containing",te:"RNA, DNAతో పోలిస్తే ఏదిని కలిగి ఉంటుంది?",o:["Uracil instead of thymine","Only proteins","No sugar","No nucleotides"],a:0,e:"RNA contains uracil where DNA generally contains thymine."},
{id:"BS-097",subject:"Biological Science",topic:"Genetics",q:"Chromosomes are mainly composed of DNA and",te:"క్రోమోజోములు ప్రధానంగా DNA మరియు దేనితో ఏర్పడతాయి?",o:["Proteins","Lipids only","Water only","Starch"],a:0,e:"Chromosomes consist mainly of DNA associated with proteins."},
{id:"BS-098",subject:"Biological Science",topic:"Genetics",q:"A pair of genes controlling the same trait are called",te:"ఒకే లక్షణాన్ని నియంత్రించే జీన్ జంటను ఏమంటారు?",o:["Alleles","Ribosomes","Enzymes","Hormones"],a:0,e:"Alleles are alternative forms of a gene at corresponding loci."},
{id:"BS-099",subject:"Biological Science",topic:"Evolution",q:"Fossils provide evidence about",te:"శిలాజాలు దేనికి ఆధారాలను అందిస్తాయి?",o:["Past life and evolutionary history","Only present weather","Electric current","Blood pressure"],a:0,e:"Fossils preserve evidence of organisms that lived in the past."},
{id:"BS-100",subject:"Biological Science",topic:"Ecology",q:"The study of interactions between organisms and their environment is",te:"జీవులు మరియు పర్యావరణం మధ్య పరస్పర చర్యల అధ్యయనాన్ని ఏమంటారు?",o:["Ecology","Anatomy","Genetics","Histology"],a:0,e:"Ecology studies relationships between organisms and their environment."},

{id:"BS-101",subject:"Biological Science",topic:"Ecology",q:"A population consists of organisms of the same species living in",te:"జనాభా అంటే ఒకే జాతికి చెందిన జీవులు",o:["The same area at a given time","Different planets only","Only laboratories","Only oceans"],a:0,e:"A population is a group of the same species in an area at a given time."},
{id:"BS-102",subject:"Biological Science",topic:"Ecology",q:"A community includes",te:"జీవ సముదాయంలో",o:["Different populations living together","Only one organism","Only one species always","Only plants"],a:0,e:"A community contains populations of different species interacting in an area."},
{id:"BS-103",subject:"Biological Science",topic:"Ecology",q:"The first trophic level in a food chain is occupied by",te:"ఆహార గొలుసులో మొదటి పోషక స్థాయిని ఎవరు ఆక్రమిస్తారు?",o:["Producers","Primary consumers","Secondary consumers","Decomposers only"],a:0,e:"Producers occupy the first trophic level."},
{id:"BS-104",subject:"Biological Science",topic:"Ecology",q:"Herbivores are generally",te:"శాకాహారులు సాధారణంగా",o:["Primary consumers","Producers","Decomposers","Top carnivores"],a:0,e:"Herbivores feed directly on producers and are primary consumers."},
{id:"BS-105",subject:"Biological Science",topic:"Ecology",q:"Carnivores that feed on herbivores are generally",te:"శాకాహారులను తినే మాంసాహారులు సాధారణంగా",o:["Secondary consumers","Producers","Primary producers","Decomposers"],a:0,e:"Carnivores feeding on primary consumers are often secondary consumers."},

{id:"BS-106",subject:"Biological Science",topic:"Environment",q:"Planting trees on land that was previously not forested is called",te:"అడవి కాని ప్రాంతంలో చెట్లు నాటడాన్ని ఏమంటారు?",o:["Afforestation","Deforestation","Desertification","Pollution"],a:0,e:"Afforestation means establishing forests on non-forest land."},
{id:"BS-107",subject:"Biological Science",topic:"Environment",q:"The gradual increase in Earth's average temperature is",te:"భూమి సగటు ఉష్ణోగ్రత క్రమంగా పెరగడాన్ని ఏమంటారు?",o:["Global warming","Acid rain","Ozone formation","Eutrophication"],a:0,e:"Global warming refers to the long-term rise in Earth's average temperature."},
{id:"BS-108",subject:"Biological Science",topic:"Environment",q:"Which practice helps conserve biodiversity?",te:"జీవ వైవిధ్య పరిరక్షణకు సహాయపడే చర్య ఏది?",o:["Protecting natural habitats","Destroying forests","Overhunting","Polluting rivers"],a:0,e:"Habitat protection is an important biodiversity conservation strategy."},
{id:"BS-109",subject:"Biological Science",topic:"Water",q:"A major source of freshwater for human use is",te:"మానవ వినియోగానికి మంచినీటి ప్రధాన వనరు ఏది?",o:["Rivers and groundwater","Sea water only","Industrial waste","Oil"],a:0,e:"Rivers and groundwater are important freshwater sources."},
{id:"BS-110",subject:"Biological Science",topic:"Waste Management",q:"Composting is mainly used for",te:"కంపోస్టింగ్ ప్రధానంగా దేనికి ఉపయోగిస్తారు?",o:["Biodegradable organic waste","Metal waste","Glass only","Electronic circuits"],a:0,e:"Composting converts biodegradable organic matter into useful compost."},

{id:"BS-111",subject:"Biological Science",topic:"Plant Physiology",q:"Transpiration is the loss of water mainly through",te:"మొక్కలలో నీటి నష్టం ప్రధానంగా దేనివల్ల జరుగుతుంది?",o:["Stomata","Roots only","Seeds only","Flowers only"],a:0,e:"Most transpiration occurs through stomata in leaves."},
{id:"BS-112",subject:"Biological Science",topic:"Plant Physiology",q:"Stomata are mainly involved in",te:"ఆకు రంధ్రాలు ప్రధానంగా దేనిలో పాల్గొంటాయి?",o:["Gas exchange and transpiration","Blood circulation","Bone formation","Digestion"],a:0,e:"Stomata regulate gas exchange and water loss."},
{id:"BS-113",subject:"Biological Science",topic:"Plant Physiology",q:"The raw materials for photosynthesis are mainly",te:"కిరణజన్య సంయోగక్రియకు ప్రధాన ముడి పదార్థాలు ఏవి?",o:["Carbon dioxide and water","Oxygen and protein","Nitrogen and fat","Glucose and oxygen only"],a:0,e:"Photosynthesis uses carbon dioxide and water with light energy."},
{id:"BS-114",subject:"Biological Science",topic:"Plant Physiology",q:"The food product formed directly during photosynthesis is",te:"కిరణజన్య సంయోగక్రియలో ఏర్పడే ప్రధాన ఆహార ఉత్పత్తి ఏది?",o:["Glucose","Protein","Urea","Fat only"],a:0,e:"Photosynthesis produces carbohydrates such as glucose."},
{id:"BS-115",subject:"Biological Science",topic:"Plant Physiology",q:"The opening and closing of stomata is regulated mainly by",te:"ఆకు రంధ్రాల తెరుచుకోవడం మరియు మూసుకోవడాన్ని ప్రధానంగా ఎవరు నియంత్రిస్తారు?",o:["Guard cells","Red blood cells","Neurons","Root hairs only"],a:0,e:"Guard cells regulate stomatal opening and closing."}
);

console.log("115 additional questions appended");
