import svgPaths from "./svg-9rtvrd9c82";
import imgEllipse2 from "../../assets/6b862674031cedd47d1c1ee1fd1f2b6a8663817f.png";
import imglogo from "../../assets/logo.png";
import imgRectangle3 from "../../assets/5eff9b45ac08cb1eb0a3dadae087d37f4d1f186d.png";
import imgImage1 from "../../assets/7a0f549fc3bc080f100097b5b78cd2968d4df5d1.png";
import imgImage2 from "../../assets/bf9ef4a4d809a0f1f6e8b65eb2fa1fa10e250a12.png";
import imgImage3 from "../../assets/3fc392248a1a0b5eac1b0853d73219b5e40f5559.png";
import imgImage4 from "../../assets/99da737a2444224be6af2930f7897c25b1edb41c.png";
import imgImage5 from "../../assets/3f2e68604b012cd62241461eeedf92921574cb9e.png";
import imgImage6 from "../../assets/b22045904b180cdf1cd9263874fd156c2e4f72a5.png";
import imgImage7 from "../../assets/3dcaec536be7dc48fdf4f572028c560e4df01381.png";

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] pr-0 py-0 relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
        <p className="leading-[28px]">DInnoV-IT</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[60px]">
        <img alt="" className="block max-w-none size-full" height="60" src={imgEllipse2} width="60" />
      </div>
      <Margin />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px]">À propos</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px]">Services</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px]">Projets</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
      <Link3 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-[#1f2937] relative shrink-0 w-full" data-name="Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Container />
          <List />
        </div>
      </div>
    </div>
  );
}

function New() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 top-0 w-[1511.2px]" data-name="NEW" style={{ backgroundImage: "linear-gradient(90deg, rgb(17, 24, 39) 0%, rgb(17, 24, 39) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Nav />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[16px] shrink-0">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[48px]">Travaillons ensemble</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#14b8a6] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[16px] shrink-0">
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap">
        <p className="leading-[48px]">Télécharger mon CV</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex flex-col gap-[16px] items-start left-[70px] p-[64px] rounded-[32px] top-[190px] w-[708px]">
      <div className="flex flex-col font-['Segoe_UI:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-center text-nowrap text-white">
        <p className="leading-[48px]">DInnoV-IT</p>
      </div>
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">
        <p className="leading-[28px]">{`Architecture Cloud, DevOps, Sécurité & Management de projets pour les entreprises innovantes`}</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-full relative shrink-0 w-[1511px]">
      <div className="absolute h-[708px] left-0 top-0 w-[1511px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle3} />
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex h-[708px] items-center left-[calc(50%+0.4px)] top-[108px] translate-x-[-50%] w-[1511px]">
      <Frame3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col items-center justify-center left-[166px] px-[32px] py-[16px] rounded-[100px] top-[-22px]">
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-center text-nowrap text-white">
        <p className="leading-[40px]">À propos de Vincent Brasseur</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[100px] left-0 right-0 top-0" data-name="Heading 2">
      <Frame12 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[64px]" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="mb-0">{`Fort d'une expérience chez L'Oréal et Accor, je me spécialise dans l'architecture Cloud et DevOps, couvrant AWS, Azure,`}</p>
        <p>Kubernetes, Terraform, CI/CD et la sécurité des infrastructures.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[128px]" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="mb-0">J’ai également dirigé des projets complexes, coordonné des équipes techniques et assuré la livraison de solutions Cloud</p>
        <p className="mb-0">sécurisées et automatisées. Mon expertise inclut la planification, la gestion des risques, le suivi des indicateurs de performance</p>
        <p>{`et l'accompagnement des équipes dans les bonnes pratiques DevOps.`}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[216px]" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="mb-0">{`Je fonde DInnoV-IT pour accompagner les entreprises dans la transformation numérique, l'automatisation des workflows et`}</p>
        <p>{`l'optimisation de leur infrastructure Cloud.`}</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[312px] left-[307.4px] right-[307.6px] top-[935px]" data-name="Container">
      <Heading />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[#14b8a6] content-stretch flex items-start justify-center px-[24px] py-[12px] relative rounded-[16px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] text-center text-nowrap">
        <p className="leading-[24px]">Télécharger mon CV</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[307.4px] right-[307.6px] top-[1240px]" data-name="Container">
      <Link4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[4px] right-0 top-0" data-name="Heading 2">
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-center text-nowrap text-white">
        <p className="leading-[40px]">Services</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path d={svgPaths.p3480e700} fill="var(--fill-0, #14B8A6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white">
        <p className="leading-[32px]">Cloud Architecture</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="mb-0">Conception et déploiement</p>
        <p>d’infrastructures AWS, Azure et multi-cloud.</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[rgba(55,65,81,0.2)] content-stretch flex flex-col gap-[8px] items-center justify-center p-[24px] relative rounded-[16px] self-stretch shrink-0 w-[357.33px]" data-name="Background">
      <Frame />
      <Heading1 />
      <Container6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path d={svgPaths.p346102c0} fill="var(--fill-0, #14B8A6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white">
        <p className="leading-[32px]">{`DevOps & CI/CD`}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="mb-0">Automatisation des pipelines CI/CD,</p>
        <p className="mb-0">gestion des containers et GitOps avec</p>
        <p>Kubernetes.</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[rgba(55,65,81,0.2)] content-stretch flex flex-col gap-[8px] items-center justify-center p-[24px] relative rounded-[16px] self-stretch shrink-0 w-[357.34px]" data-name="Background">
      <Frame1 />
      <Heading3 />
      <Container7 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path d={svgPaths.p107ab930} fill="var(--fill-0, #14B8A6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white">
        <p className="leading-[32px]">{`Sécurité & Observabilité`}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="mb-0">Monitoring Prometheus, micro-</p>
        <p className="mb-0">segmentation, sécurité Cloud et audit des</p>
        <p>infrastructures.</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[rgba(55,65,81,0.2)] content-stretch flex flex-col gap-[8px] items-center p-[24px] relative rounded-[16px] self-stretch shrink-0 w-[357.33px]" data-name="Background">
      <Frame13 />
      <Heading4 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-start justify-center left-[4px] right-0 top-[72px]" data-name="Container">
      <Background />
      <Background1 />
      <Background2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[232px] left-[178.4px] top-[1387px] w-[1156px]">
      <Heading2 />
      <Container9 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-center text-nowrap text-white">
        <p className="leading-[40px]">Projets récents</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[182.4px] max-w-[1152px] right-[176.6px] top-[1737px]" data-name="Container">
      <Heading5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="mr-[-10px] relative shrink-0 size-[40px]">
      <div className="absolute left-0 size-[40px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #FFC284)" id="Ellipse 3" r="20" />
        </svg>
      </div>
      <div className="absolute h-[25px] left-[calc(50%-0.17px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[21px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-59.8%] max-w-none top-0 w-[219.61%]" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="mr-[-10px] relative shrink-0 size-[40px]">
      <div className="absolute left-0 size-[40px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #84D8FF)" id="Ellipse 3" r="20" />
        </svg>
      </div>
      <div className="absolute left-[calc(50%-0.17px)] size-[35px] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start overflow-clip pl-[10px] pr-[20px] py-[10px] relative shrink-0">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <Frame9 />
      <div className="flex flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white">
        <p className="leading-[28px]">{`Cluster K3s & Jenkins`}</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="mb-0">Déploiement de microservices avec GitOps</p>
        <p>et CI/CD sur un cluster K3s local.</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[rgba(31,41,55,0.2)] content-stretch flex flex-col gap-[8px] h-[232px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0" data-name="Background">
      <Heading6 />
      <Container11 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="mr-[-10px] relative shrink-0 size-[40px]">
      <div className="absolute left-0 size-[40px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #9FFFA8)" id="Ellipse 3" r="20" />
        </svg>
      </div>
      <div className="absolute h-[18px] left-[calc(50%-0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[21px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.89%] left-[-38.08%] max-w-none top-0 w-[179.36%]" src={imgImage3} />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="mr-[-10px] relative shrink-0 size-[40px]">
      <div className="absolute left-0 size-[40px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #FFFD84)" id="Ellipse 3" r="20" />
        </svg>
      </div>
      <div className="absolute h-[26px] left-[calc(50%+0.5px)] top-[calc(50%-1px)] translate-x-[-50%] translate-y-[-50%] w-[35px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[134.62%] left-[-3.16%] max-w-none top-0 w-[108.24%]" src={imgImage4} />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start overflow-clip pl-[10px] pr-[20px] py-[10px] relative shrink-0">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <Frame16 />
      <div className="flex flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">
        <p className="leading-[28px]">{`EKS & ArgoCD`}</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="mb-0">Mise en place d’un cluster Kubernetes</p>
        <p className="mb-0">managé AWS avec déploiement GitOps</p>
        <p>sécurisé.</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[rgba(31,41,55,0.2)] content-stretch flex flex-col gap-[8px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0" data-name="Background">
      <Heading7 />
      <Container12 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <div className="absolute left-0 size-[40px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #FF84E6)" id="Ellipse 3" r="20" />
        </svg>
      </div>
      <div className="absolute h-[25px] left-[calc(50%-0.17px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[21px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start overflow-clip p-[10px] relative shrink-0">
      <Frame17 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <Frame18 />
      <div className="flex flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">
        <p className="leading-[28px]">{`Terraform & Infrastructure`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="mb-0">Automatisation complète des</p>
        <p className="mb-0">environnements Cloud pour des projets</p>
        <p>multi-tenant.</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[rgba(31,41,55,0.2)] content-stretch flex flex-col gap-[8px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0" data-name="Background">
      <Heading8 />
      <Container13 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <div className="absolute left-0 size-[40px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #8490FF)" id="Ellipse 3" r="20" />
        </svg>
      </div>
      <div className="absolute h-[25px] left-[calc(50%-0.17px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[21px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start overflow-clip p-[10px] relative shrink-0">
      <Frame19 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <Frame20 />
      <div className="flex flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">
        <p className="leading-[28px]">{`Monitoring & SNMP`}</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white w-[302px]">
        <p className="mb-0">Configuration Prometheus pour la collecte</p>
        <p>de métriques SNMP de NAS et Proxmox.</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[rgba(31,41,55,0.2)] content-stretch flex flex-col gap-[8px] h-[232px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0" data-name="Background">
      <Heading9 />
      <Container14 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <div className="absolute left-0 size-[40px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #FF8486)" id="Ellipse 3" r="20" />
        </svg>
      </div>
      <div className="absolute h-[29px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[27px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start overflow-clip p-[10px] relative shrink-0">
      <Frame21 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <Frame22 />
      <div className="flex flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">
        <p className="leading-[28px]">{`Vaultwarden & Traefik`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white w-[302px]">
        <p className="mb-0">Sécurisation des mots de passe et</p>
        <p className="mb-0">déploiement d’Ingress Traefik multi-</p>
        <p>namespace.</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[rgba(31,41,55,0.2)] content-stretch flex flex-col gap-[8px] items-center justify-center p-[32px] relative rounded-[16px] shrink-0" data-name="Background">
      <Heading10 />
      <Container15 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[16px] items-start justify-center left-[178.4px] overflow-clip p-[10px] top-[1821px] w-[1156px]">
      <Background3 />
      <Background4 />
      <Background5 />
      <Background6 />
      <Background7 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-0" data-name="Heading 2">
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-center text-nowrap text-white">
        <p className="leading-[40px]">Contact</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[64px]" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">Vous souhaitez collaborer ou discuter d’un projet ? Envoyez-moi un message :</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">
        <p className="leading-[normal]">Nom</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[60px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-center pb-[13.6px] pt-[12.8px] px-[12px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">
        <p className="leading-[normal]">Email</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[60px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-center pb-[13.6px] pt-[12.8px] px-[12px] relative size-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px] w-full">
        <p className="leading-[24px]">Message</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-auto size-full">
        <div className="content-stretch flex flex-col items-start pb-[108px] pt-[12px] px-[12px] relative w-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#14b8a6] content-stretch flex flex-col items-center justify-center pl-[420.06px] pr-[420.08px] py-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">Envoyer</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 right-0 top-[112px]" data-name="Form">
      <Input />
      <Input1 />
      <Textarea />
      <Button />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[472px]" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">
          <span>{`Ou contactez-moi directement : `}</span>
          <span className="text-[#2dd4bf]">vincent.brasseur@dinnov-it.com</span>
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[504px]" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px]">
          <span>{`LinkedIn : `}</span>
          <span className="text-[#2dd4bf]">linkedin.com/in/vincent-brasseur</span>
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[528px] max-w-[896px] relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Container16 />
      <Form />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[rgba(31,41,55,0.2)] content-stretch flex flex-col items-start left-[calc(50%+0.5px)] px-[307.6px] py-[80px] top-[2552px] translate-x-[-50%] w-[1511.2px]" data-name="Section">
      <Container22 />
    </div>
  );
}

export default function SiteWeb() {
  return (
    <div className="bg-[#111827] relative size-full" data-name="Site web">
      <New />
      <div className="absolute left-[calc(50%-0.1px)] size-[1000px] top-[1648px] translate-x-[-50%]">
        <div className="absolute inset-[-60%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2200 2200">
            <g filter="url(#filter0_f_1_176)" id="Ellipse 1">
              <circle cx="1100" cy="1100" fill="var(--fill-0, #14B8A6)" fillOpacity="0.5" r="500" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2200" id="filter0_f_1_176" width="2200" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_176" stdDeviation="300" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame2 />
      <Container4 />
      <Container5 />
      <Frame8 />
      <Container10 />
      <Frame23 />
      <Section />
      <div className="absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+8.5px)] not-italic text-[#6b7280] text-[16px] text-center text-nowrap top-[3276.6px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[24px]">© 2025 DInnoV-IT. Tous droits réservés.</p>
      </div>
      <div className="absolute flex items-center justify-center left-[994.4px] size-[66.196px] top-[884px]" style={{ "--transform-inner-width": "60", "--transform-inner-height": "60" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.272deg]">
          <div className="relative size-[60px]">
            <img alt="" className="block max-w-none size-full" height="60" src={imgEllipse2} width="60" />
          </div>
        </div>
      </div>
    </div>
  );
}