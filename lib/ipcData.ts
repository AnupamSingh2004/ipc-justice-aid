// Fix the TypeScript error by ensuring we're properly checking tag strings
export interface IPCSection {
  section: string;
  title: string;
  description: string;
  punishment?: string;
  tags: string[];
}

export const ipcSections: IPCSection[] = [
  {
    section: "299",
    title: "Culpable Homicide",
    description:
      "Whoever causes death by doing an act with the intention of causing death, or with the intention of causing such bodily injury as is likely to cause death, or with the knowledge that they are likely by such act to cause death, commits the offense of culpable homicide.",
    punishment:
      "Imprisonment for life, or imprisonment up to 10 years and fine.",
    tags: ["murder", "killing", "death", "homicide", "manslaughter"],
  },
  {
    section: "300",
    title: "Murder",
    description:
      "Culpable homicide is murder if the act by which the death is caused is done with the intention of causing death, or if it is done with the intention of causing such bodily injury as the offender knows to be likely to cause the death of the person to whom the harm is caused.",
    punishment: "Death, or imprisonment for life, and fine.",
    tags: ["murder", "killing", "death", "homicide", "intentional"],
  },
  {
    section: "302",
    title: "Punishment for murder",
    description:
      "Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.",
    punishment: "Death, or imprisonment for life, and fine.",
    tags: ["murder", "killing", "punishment", "death penalty"],
  },
  {
    section: "304A",
    title: "Causing death by negligence",
    description:
      "Whoever causes the death of any person by doing any rash or negligent act not amounting to culpable homicide, shall be punished with imprisonment for a term which may extend to two years, or with fine, or with both.",
    punishment: "Imprisonment up to 2 years, or fine, or both.",
    tags: ["negligence", "accident", "death", "rash", "careless"],
  },
  {
    section: "307",
    title: "Attempt to murder",
    description:
      "Whoever does any act with such intention or knowledge, and under such circumstances that, if they by that act caused death, they would be guilty of murder, shall be punished with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine.",
    punishment: "Imprisonment up to 10 years and fine.",
    tags: ["murder", "attempt", "hurt", "injury", "intention"],
  },
  {
    section: "319",
    title: "Hurt",
    description:
      "Whoever causes bodily pain, disease or infirmity to any person is said to cause hurt.",
    tags: ["hurt", "injury", "pain", "bodily harm"],
  },
  {
    section: "320",
    title: "Grievous hurt",
    description:
      "The following kinds of hurt only are designated as grievous: Emasculation, Permanent privation of the sight of either eye, Permanent privation of the hearing of either ear, etc.",
    tags: ["grievous", "serious", "injury", "hurt", "permanent damage"],
  },
  {
    section: "323",
    title: "Punishment for voluntarily causing hurt",
    description:
      "Whoever, except in the case provided for by section 334, voluntarily causes hurt, shall be punished with imprisonment of either description for a term which may extend to one year, or with fine which may extend to one thousand rupees, or with both.",
    punishment:
      "Imprisonment up to 1 year, or fine up to 1000 rupees, or both.",
    tags: ["hurt", "voluntary", "punishment", "injury"],
  },
  {
    section: "325",
    title: "Punishment for voluntarily causing grievous hurt",
    description:
      "Whoever, except in the case provided for by section 335, voluntarily causes grievous hurt, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    punishment: "Imprisonment up to 7 years and fine.",
    tags: ["grievous", "hurt", "punishment", "serious injury"],
  },
  {
    section: "354",
    title:
      "Assault or criminal force to woman with intent to outrage her modesty",
    description:
      "Whoever assaults or uses criminal force to any woman, intending to outrage or knowing it to be likely that he will thereby outrage her modesty, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
    punishment: "Imprisonment up to 2 years, or fine, or both.",
    tags: ["assault", "woman", "modesty", "harassment", "sexual"],
  },
  {
    section: "375",
    title: "Rape",
    description:
      "A man is said to commit rape if he has sexual intercourse with a woman under circumstances falling under any of the six following descriptions: Against her will, without her consent, etc.",
    punishment:
      "Rigorous imprisonment not less than 7 years but which may extend to imprisonment for life, and fine.",
    tags: ["rape", "sexual assault", "consent", "woman"],
  },
  {
    section: "376",
    title: "Punishment for rape",
    description:
      "Whoever, except in the cases provided for in sub-section (2), commits rape, shall be punished with rigorous imprisonment of either description for a term which shall not be less than seven years, but which may extend to imprisonment for life, and shall also be liable to fine.",
    punishment:
      "Rigorous imprisonment not less than 7 years extending to life imprisonment, and fine.",
    tags: ["rape", "punishment", "sexual assault"],
  },
  {
    section: "378",
    title: "Theft",
    description:
      "Whoever, intending to take dishonestly any movable property out of the possession of any person without that person's consent, moves that property in order to such taking, is said to commit theft.",
    tags: ["theft", "stealing", "property", "dishonest"],
  },
  {
    section: "379",
    title: "Punishment for theft",
    description:
      "Whoever commits theft shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
    punishment: "Imprisonment up to 3 years, or fine, or both.",
    tags: ["theft", "punishment", "stealing"],
  },
  {
    section: "383",
    title: "Extortion",
    description:
      "Whoever intentionally puts any person in fear of any injury to that person, or to any other, and thereby dishonestly induces the person so put in fear to deliver to any person any property or valuable security, or anything signed or sealed which may be converted into a valuable security, commits extortion.",
    tags: ["extortion", "threat", "fear", "property", "blackmail"],
  },
  {
    section: "390",
    title: "Robbery",
    description:
      "In all robbery there is either theft or extortion. When theft is robbery: Theft is robbery if, in order to the committing of the theft, or in committing the theft, or in carrying away or attempting to carry away property obtained by the theft, the offender, for that end, voluntarily causes or attempts to cause to any person death or hurt or wrongful restraint, or fear of instant death or of instant hurt or of instant wrongful restraint.",
    tags: ["robbery", "theft", "force", "violence", "threat"],
  },
  {
    section: "391",
    title: "Dacoity",
    description:
      "When five or more persons conjointly commit or attempt to commit a robbery, or where the whole number of persons conjointly committing or attempting to commit a robbery, and persons present and aiding such commission or attempt, amount to five or more, every person so committing, attempting or aiding, is said to commit dacoity.",
    tags: ["dacoity", "gang", "robbery", "group"],
  },
  {
    section: "415",
    title: "Cheating",
    description:
      "Whoever, by deceiving any person, fraudulently or dishonestly induces the person so deceived to deliver any property to any person, or to consent that any person shall retain any property, or intentionally induces the person so deceived to do or omit to do anything which he would not do or omit if he were not so deceived, and which act or omission causes or is likely to cause damage or harm to that person in body, mind, reputation or property, is said to cheat.",
    tags: ["cheating", "fraud", "deception", "dishonesty"],
  },
  {
    section: "420",
    title: "Cheating and dishonestly inducing delivery of property",
    description:
      "Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter or destroy the whole or any part of a valuable security, or anything which is signed or sealed, and which is capable of being converted into a valuable security, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    punishment: "Imprisonment up to 7 years and fine.",
    tags: ["cheating", "fraud", "property", "deception"],
  },
  {
    section: "499",
    title: "Defamation",
    description:
      "Whoever, by words either spoken or intended to be read, or by signs or by visible representations, makes or publishes any imputation concerning any person intending to harm, or knowing or having reason to believe that such imputation will harm, the reputation of such person, is said, except in the cases hereinafter expected, to defame that person.",
    tags: ["defamation", "reputation", "slander", "libel"],
  },
  {
    section: "503",
    title: "Criminal intimidation",
    description:
      "Whoever threatens another with any injury to his person, reputation or property, or to the person or reputation of any one in whom that person is interested, with intent to cause alarm to that person, or to cause that person to do any act which he is not legally bound to do, or to omit to do any act which that person is legally entitled to do, as the means of avoiding the execution of such threat, commits criminal intimidation.",
    tags: ["threat", "intimidation", "fear", "coercion"],
  },
];
