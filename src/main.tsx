import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n/i18n"; // Import i18n configuration
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Protocol from "./pages/protocols/Protocol";
import { NavigationBar } from "./components/navigationBar";
import App from "./App";
import Theorie from "./pages/theorie/Theorie";
import Terminologie from "./pages/theorie/Terminologie";
import PrincipePhysiques from "./pages/theorie/PrincipePhysiques";
import Technique from "./pages/theorie/Technique";
import Avantages from "./pages/theorie/Avantages";
import ProtocolIntro from "./pages/protocols/ProtocolIntro";
import Equipe from "./pages/Equipe";

// Helper function to create protocol routes
const createProtocolRoute = (path: string, protocolPath: string) => ({
  path,
  element: (
    <>
      <NavigationBar />
      <Protocol protocolPath={protocolPath} />
    </>
  ),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // Shoulder protocols
  createProtocolRoute(
    "protocoles/epaule/biceps-brachial",
    "epaule/bicepsBrachial"
  ),
  createProtocolRoute(
    "protocoles/epaule/sous-scapulaire",
    "epaule/sousScapulaire"
  ),
  createProtocolRoute("protocoles/epaule/sus-epineux", "epaule/susEpineux"),
  createProtocolRoute(
    "protocoles/epaule/sus-epineux-et-espace-sous-acromial",
    "epaule/susEpineuxEtEspaceSousAcromial"
  ),
  createProtocolRoute(
    "protocoles/epaule/intervalle-des-rotateurs",
    "epaule/intervalleDesRotateurs"
  ),
  createProtocolRoute(
    "protocoles/epaule/articulation-acromio-claviculaire",
    "epaule/acromioClaviculaire"
  ),
  createProtocolRoute(
    "protocoles/epaule/petit-rond-et-sous-epineux",
    "epaule/petitRondetSousEpineux"
  ),
  createProtocolRoute(
    "protocoles/epaule/sus-epineux-post",
    "epaule/susEpineuxPost"
  ),
  createProtocolRoute("protocoles/epaule/sous-epineux", "epaule/sousEpineux"),
  createProtocolRoute(
    "protocoles/epaule/incisures-scapulaires-et-labrum-posterieur",
    "epaule/incisuresScapulairesEtLabrumPosterieur"
  ),

  // Elbow protocols
  createProtocolRoute(
    "protocoles/coude/tendon-distal-biceps",
    "coude/tendonDistalBicepsBrachial"
  ),
  createProtocolRoute(
    "protocoles/coude/articulation-humero-radiale",
    "coude/articulationHumeroRadiale"
  ),
  createProtocolRoute(
    "protocoles/coude/tendon-flechisseur-commun-et-ligament-lateral-interne",
    "coude/tendonFlechisseurCommunEtLigamentLateralInterne"
  ),
  createProtocolRoute(
    "protocoles/coude/tendon-triceps-brachial",
    "coude/tendonTricepsBrachial"
  ),
  createProtocolRoute("protocoles/coude/nerf-ulnaire", "coude/nerfUlnaire"),
  createProtocolRoute(
    "protocoles/coude/tendon-extenseur-commun",
    "coude/tendonExtenseurCommun"
  ),

  // Wrist protocols
  createProtocolRoute("protocoles/poignet/nerf-median", "poignet/nerfMedian"),
  createProtocolRoute(
    "protocoles/poignet/compartiments-du-poignet-dorsal",
    "poignet/compartimentsDuPoignetDorsal"
  ),

  // Diaphragm protocol
  createProtocolRoute(
    "protocoles/diaphragme/diaphragme",
    "diaphragme/Diaphragme"
  ),

  // Trunk protocols
  createProtocolRoute(
    "protocoles/tronc/droit-abdominal",
    "tronc/muscleDroitAbdominal"
  ),
  createProtocolRoute(
    "protocoles/tronc/transverse-abdominal",
    "tronc/TransverseAbdominal"
  ),
  createProtocolRoute("protocoles/tronc/multifides", "tronc/Multifides"),

  // Hip protocols
  createProtocolRoute("protocoles/hanche/col-femoral", "hanche/colFemoral"),
  createProtocolRoute(
    "protocoles/hanche/grand-trochanter",
    "hanche/grandTrochanter"
  ),

  // Thigh and knee protocols
  createProtocolRoute(
    "protocoles/cuisse-et-genou/quadriceps",
    "cuisseEtGenou/quadriceps"
  ),
  createProtocolRoute(
    "protocoles/cuisse-et-genou/tendon-quadricipital",
    "cuisseEtGenou/tendonQuadricipital"
  ),
  createProtocolRoute(
    "protocoles/cuisse-et-genou/ligament-patellaire",
    "cuisseEtGenou/ligamentPatellaire"
  ),
  createProtocolRoute(
    "protocoles/cuisse-et-genou/tuberosite-tibiale",
    "cuisseEtGenou/tuberositeTIbiale"
  ),
  createProtocolRoute(
    "protocoles/cuisse-et-genou/creux-poplite",
    "cuisseEtGenou/creuxPoplite"
  ),
  createProtocolRoute(
    "protocoles/cuisse-et-genou/ligament-collateral-interne",
    "cuisseEtGenou/ligamentCollateralInterne"
  ),
  createProtocolRoute(
    "protocoles/cuisse-et-genou/complexe-patte-d-oie",
    "cuisseEtGenou/complexeDeLaPattedOie"
  ),
  createProtocolRoute(
    "protocoles/cuisse-et-genou/ligament-collateral-externe",
    "cuisseEtGenou/ligamentCollateralExterne"
  ),
  createProtocolRoute(
    "protocoles/cuisse-et-genou/bandelette-ilio-tibiale",
    "cuisseEtGenou/bandeletteIlioTibiale"
  ),

  // Ankle and foot protocols
  createProtocolRoute(
    "protocoles/cheville-et-pied/tendon-d-achille",
    "chevilleEtPied/tendondAchille"
  ),
  createProtocolRoute(
    "protocoles/cheville-et-pied/jonction-soleaire-tendon-achille",
    "chevilleEtPied/jonctionSoleaireTendonAchille"
  ),
  createProtocolRoute(
    "protocoles/cheville-et-pied/jonction-gastrocnemiens-soleaire",
    "chevilleEtPied/jonctionGastrocnemienSoleaire"
  ),
  createProtocolRoute(
    "protocoles/cheville-et-pied/tendons-fibulaires",
    "chevilleEtPied/tendonsFibulaires"
  ),
  createProtocolRoute(
    "protocoles/cheville-et-pied/mortaise-tibiale",
    "chevilleEtPied/mortaiseTibiale"
  ),
  createProtocolRoute(
    "protocoles/cheville-et-pied/tibial-anterieur",
    "chevilleEtPied/tibialAnterieur"
  ),
  createProtocolRoute(
    "protocoles/cheville-et-pied/canal-tarsien",
    "chevilleEtPied/canalTarsien"
  ),
  createProtocolRoute(
    "protocoles/cheville-et-pied/ligament-talo-fibulaire-anterieur",
    "chevilleEtPied/ligamentTaloFibulaireAnterieur"
  ),
  createProtocolRoute(
    "protocoles/cheville-et-pied/fascia-plantaire",
    "chevilleEtPied/fasciaPlantaire"
  ),
  createProtocolRoute(
    "protocoles/cheville-et-pied/orteils",
    "chevilleEtPied/orteils"
  ),

  // Theory pages
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
    path: "protocoles",
    element: (
      <>
        <NavigationBar />
        <ProtocolIntro />
      </>
    ),
  },
  {
    path: "equipe",
    element: (
      <>
        <NavigationBar />
        <Equipe />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
