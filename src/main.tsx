import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Protocol from "./pages/protocols/Protocol";
import { NavigationBar } from "./components/navigationBar";
import App from "./App";
import Multifides from "./i18n/fr/protocols/tronc/Multifides.json";
import BicepsBrachial from "./i18n/fr/protocols/epaule/bicepsBrachial.json";
import SousScapulaire from "./i18n/fr/protocols/epaule/sousScapulaire.json";
import SusEpineux from "./i18n/fr/protocols/epaule/susEpineux.json";
import SusEpineuxEtEspace from "./i18n/fr/protocols/epaule/susEpineuxEtEspaceSousAcromial.json";
import IntervalleDesRotateurs from "./i18n/fr/protocols/epaule/intervalleDesRotateurs.json";
import ArticulationAC from "./i18n/fr/protocols/epaule/acromioClaviculaire.json";
import PetitRondEtSousEpineux from "./i18n/fr/protocols/epaule/petitRondetSousEpineux.json";
import SusEpineuxPost from "./i18n/fr/protocols/epaule/susEpineuxPost.json";
import SousEpineux from "./i18n/fr/protocols/epaule/sousEpineux.json";
import IncisuresScapulaires from "./i18n/fr/protocols/epaule/incisuresScapulairesEtLabrumPosterieur.json";
import TendonDistalBiceps from "./i18n/fr/protocols/coude/tendonDistalBicepsBrachial.json";
import ArticulationHumeroRadial from "./i18n/fr/protocols/coude/articulationHumeroRadiale.json";
import TendonFlechisseurCommun from "./i18n/fr/protocols/coude/tendonFlechisseurCommunEtLigamentLateralInterne.json";
import TendonTricepsBrachial from "./i18n/fr/protocols/coude/tendonTricepsBrachial.json";
import NerfUlnaire from "./i18n/fr/protocols/coude/nerfUlnaire.json";
import TendonExtenseurCommun from "./i18n/fr/protocols/coude/tendonExtenseurCommun.json";
import NerfMedian from "./i18n/fr/protocols/poignet/nerfMedian.json";
import CompartimentsDorsaux from "./i18n/fr/protocols/poignet/compartimentsDuPoignetDorsal.json";
import DroitAbdominal from "./i18n/fr/protocols/tronc/muscleDroitAbdominal.json";
import TransverseAbdominal from "./i18n/fr/protocols/tronc/TransverseAbdominal.json";
import ColFemoral from "./i18n/fr/protocols/hanche/colFemoral.json";
import GrandTrochanter from "./i18n/fr/protocols/hanche/grandTrochanter.json";
import Quadriceps from "./i18n/fr/protocols/cuisseEtGenou/quadriceps.json";
import TendonQuadricipital from "./i18n/fr/protocols/cuisseEtGenou/tendonQuadricipital.json";
import LigamentPatellaire from "./i18n/fr/protocols/cuisseEtGenou/ligamentPatellaire.json";
import TuberositeTibiale from "./i18n/fr/protocols/cuisseEtGenou/tuberositeTIbiale.json";
import CreuxPoplite from "./i18n/fr/protocols/cuisseEtGenou/creuxPoplite.json";
import LigamentCollateralInterne from "./i18n/fr/protocols/cuisseEtGenou/ligamentCollateralInterne.json";
import ComplexePatteOie from "./i18n/fr/protocols/cuisseEtGenou/complexeDeLaPattedOie.json";
import LigamentCollateralExterne from "./i18n/fr/protocols/cuisseEtGenou/ligamentCollateralExterne.json";
import BandeletteIlioTibiale from "./i18n/fr/protocols/cuisseEtGenou/bandeletteIlioTibiale.json";
import TendondAchille from "./i18n/fr/protocols/chevilleEtPied/tendondAchille.json";
import JonctionSoleaireTendonAchille from "./i18n/fr/protocols/chevilleEtPied/jonctionSoleaireTendonAchille.json";
import JonctionSoleaireGastrocnemien from "./i18n/fr/protocols/chevilleEtPied/jonctionGastrocnemienSoleaire.json";
import TendonsFibulaires from "./i18n/fr/protocols/chevilleEtPied/tendonsFibulaires.json";
import MortaiseTibiale from "./i18n/fr/protocols/chevilleEtPied/mortaiseTibiale.json";
import TibialAnterieur from "./i18n/fr/protocols/chevilleEtPied/tibialAnterieur.json";
import CanalTarsien from "./i18n/fr/protocols/chevilleEtPied/canalTarsien.json";
import LigamentTaloFibulaireAnterieur from "./i18n/fr/protocols/chevilleEtPied/ligamentTaloFibulaireAnterieur.json";
import FasciaPlantaire from "./i18n/fr/protocols/chevilleEtPied/fasciaPlantaire.json";
import Orteils from "./i18n/fr/protocols/chevilleEtPied/orteils.json";

import Theorie from "./pages/theorie/Theorie";
import Terminologie from "./pages/theorie/Terminologie";
import PrincipePhysiques from "./pages/theorie/PrincipePhysiques";
import Technique from "./pages/theorie/Technique";
import Avantages from "./pages/theorie/Avantages";
import ProtocolIntro from "./pages/protocols/ProtocolIntro";
import Equipe from "./pages/Equipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "protocoles/epaule/biceps-brachial",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={BicepsBrachial} />
      </>
    ),
  },
  {
    path: "protocoles/epaule/sous-scapulaire",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={SousScapulaire} />
      </>
    ),
  },
  {
    path: "protocoles/epaule/sus-epineux",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={SusEpineux} />
      </>
    ),
  },
  {
    path: "protocoles/epaule/sus-epineux-et-espace-sous-acromial",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={SusEpineuxEtEspace} />
      </>
    ),
  },
  {
    path: "protocoles/epaule/intervalle-des-rotateurs",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={IntervalleDesRotateurs} />
      </>
    ),
  },
  {
    path: "protocoles/epaule/articulation-acromio-claviculaire",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={ArticulationAC} />
      </>
    ),
  },
  {
    path: "protocoles/epaule/petit-rond-et-sous-epineux",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={PetitRondEtSousEpineux} />
      </>
    ),
  },
  {
    path: "protocoles/epaule/sus-epineux-post",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={SusEpineuxPost} />
      </>
    ),
  },
  {
    path: "protocoles/epaule/sous-epineux",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={SousEpineux} />
      </>
    ),
  },
  {
    path: "protocoles/epaule/incisures-scapulaires-et-labrum-posterieur",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={IncisuresScapulaires} />
      </>
    ),
  },
  {
    path: "protocoles/coude/tendon-distal-biceps",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={TendonDistalBiceps} />
      </>
    ),
  },
  {
    path: "protocoles/coude/articulation-humero-radiale",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={ArticulationHumeroRadial} />
      </>
    ),
  },
  {
    path: "protocoles/coude/tendon-flechisseur-commun-et-ligament-lateral-interne",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={TendonFlechisseurCommun} />
      </>
    ),
  },
  {
    path: "protocoles/coude/tendon-triceps-brachial",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={TendonTricepsBrachial} />
      </>
    ),
  },
  {
    path: "protocoles/coude/nerf-ulnaire",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={NerfUlnaire} />
      </>
    ),
  },
  {
    path: "protocoles/coude/tendon-extenseur-commun",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={TendonExtenseurCommun} />
      </>
    ),
  },
  {
    path: "protocoles/poignet/nerf-median",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={NerfMedian} />
      </>
    ),
  },
  {
    path: "protocoles/poignet/compartiments-du-poignet-dorsal",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={CompartimentsDorsaux} />
      </>
    ),
  },
  {
    path: "protocoles/tronc/droit-abdominal",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={DroitAbdominal} />
      </>
    ),
  },
  {
    path: "protocoles/tronc/transverse-abdominal",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={TransverseAbdominal} />
      </>
    ),
  },
  {
    path: "protocoles/tronc/multifides",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={Multifides} />
      </>
    ),
  },
  {
    path: "protocoles/hanche/col-femoral",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={ColFemoral} />
      </>
    ),
  },
  {
    path: "protocoles/hanche/grand-trochanter",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={GrandTrochanter} />
      </>
    ),
  },
  {
    path: "protocoles/cuisse-et-genou/quadriceps",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={Quadriceps} />
      </>
    ),
  },
  {
    path: "protocoles/cuisse-et-genou/tendon-quadricipital",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={TendonQuadricipital} />
      </>
    ),
  },
  {
    path: "protocoles/cuisse-et-genou/ligament-patellaire",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={LigamentPatellaire} />
      </>
    ),
  },
  {
    path: "protocoles/cuisse-et-genou/tuberosite-tibiale",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={TuberositeTibiale} />
      </>
    ),
  },
  {
    path: "protocoles/cuisse-et-genou/creux-poplite",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={CreuxPoplite} />
      </>
    ),
  },
  {
    path: "protocoles/cuisse-et-genou/ligament-collateral-interne",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={LigamentCollateralInterne} />
      </>
    ),
  },
  {
    path: "protocoles/cuisse-et-genou/complexe-patte-d-oie",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={ComplexePatteOie} />
      </>
    ),
  },
  {
    path: "protocoles/cuisse-et-genou/ligament-collateral-externe",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={LigamentCollateralExterne} />
      </>
    ),
  },
  {
    path: "protocoles/cuisse-et-genou/bandelette-ilio-tibiale",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={BandeletteIlioTibiale} />
      </>
    ),
  },
  {
    path: "protocoles/cheville-et-pied/tendon-d-achille",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={TendondAchille} />
      </>
    ),
  },
  {
    path: "protocoles/cheville-et-pied/jonction-soleaire-tendon-achille",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={JonctionSoleaireTendonAchille} />
      </>
    ),
  },
  {
    path: "protocoles/cheville-et-pied/jonction-gastrocnemiens-soleaire",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={JonctionSoleaireGastrocnemien} />
      </>
    ),
  },
  {
    path: "protocoles/cheville-et-pied/tendons-fibulaires",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={TendonsFibulaires} />
      </>
    ),
  },
  {
    path: "protocoles/cheville-et-pied/mortaise-tibiale",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={MortaiseTibiale} />
      </>
    ),
  },
  {
    path: "protocoles/cheville-et-pied/tibial-anterieur",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={TibialAnterieur} />
      </>
    ),
  },
  {
    path: "protocoles/cheville-et-pied/canal-tarsien",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={CanalTarsien} />
      </>
    ),
  },
  {
    path: "protocoles/cheville-et-pied/ligament-talo-fibulaire-anterieur",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={LigamentTaloFibulaireAnterieur} />
      </>
    ),
  },
  {
    path: "protocoles/cheville-et-pied/fascia-plantaire",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={FasciaPlantaire} />
      </>
    ),
  },
  {
    path: "protocoles/cheville-et-pied/orteils",
    element: (
      <>
        <NavigationBar />
        <Protocol protocolData={Orteils} />
      </>
    ),
  },
  {
    path: "theorie",
    element: (
      <>
        <NavigationBar />
        <Theorie />
      </>
    ),
  },
  {
    path: "theorie/terminologie",
    element: (
      <>
        <NavigationBar />
        <Terminologie />
      </>
    ),
  },
  {
    path: "theorie/principes-physiques",
    element: (
      <>
        <NavigationBar />
        <PrincipePhysiques />
      </>
    ),
  },
  {
    path: "theorie/technique",
    element: (
      <>
        <NavigationBar />
        <Technique />
      </>
    ),
  },
  {
    path: "theorie/avantages",
    element: (
      <>
        <NavigationBar />
        <Avantages />
      </>
    ),
  },
  {
    path: "/protocoles",
    element: (
      <>
        <NavigationBar />
        <ProtocolIntro />
      </>
    ),
  },
  {
    path: "/equipe",
    element: (
      <>
        <NavigationBar />
        <Equipe />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
