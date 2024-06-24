interface ContentText {
  text: string[];
}

export interface Images {
  path: string;
  descriptionText?: string;
}

export interface Subsection {
  subtitle: string;
  text: string[];
}

interface IdentificationLegend {
  acronymes: string[];
  texte: string[];
}
interface Identification {
  title?: string;
  legend: IdentificationLegend[];
  imageIdentification: Images[];
}

interface Vue {
  title: string;
  source: string;
  objectifs: (string | string[])[];
  parametres: (string | string[])[];
  positionnement: (string | string[])[];
  imagePositionnement: Images[];
  identification: Identification[];
}
interface TechniqueSubsection {
  title: string;
  imagePositionnement?: Images[];
  text: (string | string[])[];
  source?: string;
}
interface TechniqueContent {
  subtitle: string;
  text: (string | string[])[];
  subSection?: TechniqueSubsection[];
  images?: Images[];
  source?: string;
}

interface ApplicationDynamique {
  title: string;
  iframe: string;
}

interface Generalites {
  sectionTitle: string;
  rangees: Row[];
  text?: string[];
}
interface ExtraTable {
  sectionTitle?: string;
  rangees: Row[];
  text?: string[];
}
interface ValeursNormatives {
  sectionTitle: string;
  rangees?: Row[];
  text?: string[];
}

interface NormesEtGeneralites {
  sectionTitle: string;
  generalites: Generalites;
  valeursNormatives: ValeursNormatives;
  content?: string[];
  extraTable?: ExtraTable;
}

export interface Technique {
  sectionTitle: string;
  content: TechniqueContent[];
  applicationDynamique?: ApplicationDynamique;
  vues: Vue[];
}

export enum ProtocolKeys {
  NormesEtGeneralites = "normesEtGeneralites",
  Technique = "technique",
  DescriptionAnatomique = "descriptionAnatomique",
  PertinenceClinique = "pertinenceClinique",
  LiensEtRefs = "liensEtRefs",
}

interface DescriptionAnatomique {
  sectionTitle: string;
  content: ContentText[];
  images: Images[];
  source: string;
  table?: Row[];
}

interface PertinenceCliniqueContent {
  subtitle: string;
  text: (string | string[])[];
}

interface PertinenceClinique {
  sectionTitle: string;
  content: PertinenceCliniqueContent[];
}

interface VoirAussiContent {
  linkTitle: string;
  link: string;
}

interface VoirAussi {
  sectionTitle: string;
  content: VoirAussiContent[];
}

interface ReferenceContent {
  text: string;
}

interface References {
  sectionTitle: string;
  content: ReferenceContent[];
}

interface LiensEtRefs {
  sectionTitle: string;
  voirAussi: VoirAussi;
  references: References;
  content?: string[];
}

interface RowData {
  data: string;
  colspan?: number;
  rowspan?: number;
  header?: boolean;
}

type Row = RowData[];

export type ProtocolSections =
  | NormesEtGeneralites
  | Technique
  | DescriptionAnatomique
  | PertinenceClinique
  | LiensEtRefs;

export interface ProtocolData {
  title: string;
  latinName?: string;
  normesEtGeneralites: NormesEtGeneralites;
  technique: Technique;
  descriptionAnatomique: DescriptionAnatomique;
  pertinenceClinique: PertinenceClinique;
  liensEtRefs: LiensEtRefs;
}
