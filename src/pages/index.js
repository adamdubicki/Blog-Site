import React from "react"
import Layout from "../components/Layout"
import bird from "../images/bird.jpg"

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:items-center">
          <div>
            <p className=" text-white font-semibold">
              Hello, my name is <b className="text-yellow-300">Adam</b>
            </p>
            <p className=" text-white font-semibold">
              I am a <b className="text-yellow-300">Full Stack Developer</b>
            </p>
          </div>
          <div className="flex-shrink-0">
            <img className="h-screen" src={bird} alt="Parrot" />
          </div>
        </div>
      </main>
    </Layout>
  )
}
