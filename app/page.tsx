"use client";
import Navbar from "./components/Navbar";
import Image from "next/image";
import gestionnaire from "@/public/gestionnaire.png";
import { Button } from "@/components/ui/button";
import { FaCartPlus } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
// import { BsDatabaseFillUp } from "react-icons/bs";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaUsersGear } from "react-icons/fa6";
import { GrDatabase } from "react-icons/gr";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import log from "@/public/log.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <section
        className="pt-36 px-5 md:px-10 lg:px-20 flex flex-col justify-center items-center"
        id="home"
      >
        <p className="text-center font-bold text-2xl md:text-base lg:text-3xl text-sky-950">
          L&apos;application 100% en ligne qui fusionne ERP et CRM pour
          entreprise (TPE, <br />
          PME, grandes entreprises, indépendants, associations)
        </p>
        <Image
          src={gestionnaire}
          alt=""
          width={450}
          className="my-5 w-full max-w-[450px]"
        />
        <Button className="bg-sky-950 mb-7">Démo gratuite</Button>
        <p className="text-xl text-center md:text-base lg:text-3xl text-sky-950">
          Une Application Web pour gérer l&apos;ensemble de votre entreprise ...
        </p>
      </section>
      {/* section C'est quoi Pondzi APP */}
      <section className="flex flex-col lg:flex-row justify-between py-10 md:py-20 px-5 md:px-10 lg:px-20 gap-10">
        <div className="flex justify-center lg:justify-start">
          <Image
            src={log}
            alt=""
            width={450}
            className="w-full max-w-[450px]"
          />
        </div>
        <div className="text-center lg:text-left pt-5 lg:pt-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-950">
            Cest quoi Pondzi App
          </h1>
          <p className="py-4">
            Pondzi App est une application innovante conçue pour simplifier et{" "}
            <br />
            optimiser la gestion des stocks pour les entreprises de toutes{" "}
            <br />
            tailles. Grâce à une interface intuitive et des fonctionnalités{" "}
            <br />
            avancées, Pondzi App aide les commerçants, les distributeurs et les{" "}
            <br />
            gestionnaires à suivre, organiser et analyser leurs inventaires en{" "}
            <br />
            temps réel.
          </p>
          <Button className="bg-sky-950">Essayez la démo gratuitement</Button>
        </div>
      </section>
      {/* section C'est quoi Pondzi APP */}

      {/* section des fonctionnalité */}
      <section className="py-10 px-5 md:px-10 lg:px-20 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-950">
          Fonctionnalités de Pondzi App
        </h1>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {/* Vente */}
          <div className="flex flex-col items-center gap-3 w-1/3 sm:w-1/4 md:w-1/6">
            <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full bg-sky-950 flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl">
              <FaCartPlus />
            </div>
            <p className="text-sm md:text-base lg:text-lg font-bold">Vente</p>
          </div>

          {/* Achat */}
          <div className="flex flex-col items-center gap-3 w-1/3 sm:w-1/4 md:w-1/6">
            <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full bg-sky-950 flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl">
              <FaMoneyBillTrendUp />
            </div>
            <p className="text-sm md:text-base lg:text-lg font-bold">Achat</p>
          </div>

          {/* Gestion Stock */}
          <div className="flex flex-col items-center gap-3 w-1/3 sm:w-1/4 md:w-1/6">
            <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full bg-sky-950 flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl">
              <GrDatabase />
            </div>
            <p className="text-sm md:text-base lg:text-lg font-bold">
              Gestion Stock
            </p>
          </div>

          {/* Facturation */}
          <div className="flex flex-col items-center gap-3 w-1/3 sm:w-1/4 md:w-1/6">
            <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full bg-sky-950 flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl">
              <BsFillClipboardDataFill />
            </div>
            <p className="text-sm md:text-base lg:text-lg font-bold">
              Facturation
            </p>
          </div>

          {/* Comptabilité */}
          <div className="flex flex-col items-center gap-3 w-1/3 sm:w-1/4 md:w-1/6">
            <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full bg-sky-950 flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl">
              <GiTakeMyMoney />
            </div>
            <p className="text-sm md:text-base lg:text-lg font-bold">
              Comptabilité
            </p>
          </div>

          {/* Gestion clientelle */}
          <div className="flex flex-col items-center gap-3 w-1/3 sm:w-1/4 md:w-1/6">
            <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full bg-sky-950 flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl">
              <FaUsersGear />
            </div>
            <p className="text-sm md:text-base lg:text-lg font-bold">
              Gestion clientelle
            </p>
          </div>

          {/* Devis */}
          <div className="flex flex-col items-center gap-3 w-1/3 sm:w-1/4 md:w-1/6">
            <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full bg-sky-950 flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl">
              <BsFillClipboardDataFill />
            </div>
            <p className="text-sm md:text-base lg:text-lg font-bold">Devis</p>
          </div>
        </div>
      </section>
      {/* section des fonctionnalité */}

      {/* utilisation de pondzi App */}
      <section className="py-10 px-5 md:px-10 lg:px-20 flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
        <div className="text-center lg:text-left pt-5 lg:pt-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-950">
            Qui peut utiliser <br /> pondzi App
          </h1>
          <p className="py-5 md:py-10 text-sm md:text-base">
            Les entrepreneurs et entreprises qui ne supportent pas le désordre{" "}
            <br />
            et veulent une gestion des stocks professionnelle, efficace et{" "}
            <br />
            rentable. Que vous soyez un petit commerçant ou une grande <br />
            entreprise, vous avez besoin d’un outil qui ne fait pas d’erreurs,{" "}
            <br />
            comme vous.
          </p>
          <Button className="bg-sky-950">Demo gratuite</Button>
        </div>
        <div>
          <Image
            src={gestionnaire}
            alt=""
            width={350}
            className="w-full max-w-[350px]"
          />
        </div>
      </section>
      {/* utilisation de pondzi App */}

      {/* section des offres  */}
      <section className="py-10 px-5 md:px-10 lg:px-20">
        <div className="text-center font-bold text-2xl md:text-3xl lg:text-4xl text-sky-950 py-5">
          <h1>Nos Offres</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2">
            <Card className="bg-sky-900 text-white">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">
                  Pack Essentiel
                </CardTitle>
                <CardDescription className="font-bold text-white">
                  <p className="text-3xl">15.000 Fcfa</p> <br />
                  <span className="">
                    Pour les petites entreprises ou commerçants qui souhaitent
                    une solution simple et efficace.
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Interface utilisateur intuitive</li>
                  <li>Gestion des stocks en temps réel</li>
                  <li>Ajout et modification de produits</li>
                  <li>Alertes de seuil de stock</li>
                  <li>Support client dédié</li>
                  <li>Exportation des données</li>
                </ul>
              </CardContent>
              <CardFooter>
                <button className="bg-white text-sky-900 px-4 py-2 rounded-md hover:bg-sky-700 hover:text-white">
                  Demander la démo
                </button>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full md:w-1/2   bg-white">
            <Card className="bg-sky-900 text-white">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">
                  <p>Pack premium</p>
                </CardTitle>
                <CardDescription className=" font-bold text-white">
                  <p className="text-3xl">25.000 Fcfa</p> <br />
                  <span>
                    Pour les entreprises en croissance ou les grandes structures
                    cherchant une gestion avancée et optimisée.
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Toutes les fonctionnalités du Pack Essentiel.</li>
                  <li>
                    Prévisions de réapprovisionnement grace a
                    l&apos;Intelligence artificielle{" "}
                  </li>
                  <li>Tableau de bord avancé</li>
                  <li>Support client dédié</li>
                  <li>Agent assistance avec inteligence artificielle</li>
                  <li>CRM Email & Whatsapp</li>
                </ul>
              </CardContent>
              <CardFooter>
                <button className="bg-white text-sky-900 px-4 py-2 rounded-md hover:bg-sky-700 hover:text-white">
                  Demander la démo
                </button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      {/* section des offres  */}

      {/* section les avantages */}
      <section className="py-10 px-5 md:px-10 lg:px-20">
        <div className="text-center font-bold text-2xl md:text-3xl lg:text-4xl text-sky-950 py-5">
          <h1>Les avantages de Pondzi App</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div>
            <Card>
              <CardHeader className="font-bold text-xl md:text-2xl">
                <CardTitle>Prix accessible</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Chez Pondzi App, nous croyons que la gestion de stock
                  professionnelle doit être à la portée de toutes les
                  entreprises, grandes ou petites. Nos tarifs compétitifs vous
                  permettent de bénéficier d’un outil puissant sans compromettre
                  votre budget.
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader className="font-bold text-xl md:text-2xl">
                <CardTitle>Hébergement Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Profitez de la fiabilité et de la sécurité de notre
                  hébergement cloud. Vos données sont sauvegardées en temps réel
                  et accessibles partout, à tout moment, sur tous vos appareils.
                  Avec Pondzi App, gérez vos stocks sans limites et en toute
                  sécurité.
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader className="font-bold text-xl md:text-2xl">
                <CardTitle>Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Oubliez les tracas techniques ! Notre équipe assure une
                  maintenance régulière pour garantir une performance optimale
                  de votre application. Vous pouvez ainsi vous concentrer sur
                  votre activité pendant que nous gérons les aspects techniques.
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader className="font-bold text-xl md:text-2xl">
                <CardTitle>Évolution continue avec l&apos;IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Pondzi App intègre des fonctionnalités basées sur
                  l&apos;intelligence artificielle qui s&apos;améliorent avec le
                  temps. analyses intelligentes et recommandations sur mesure :
                  notre application évolue pour s&apos;adapter à vos besoins et
                  vous offrir toujours le meilleur.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* section les avantages */}

      {/* footer */}

      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Pondzi App
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"></div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Pondzi App
              </a>
              . Tout Droit réservés.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="#"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* footer */}
    </>
  );
}
