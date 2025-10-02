import React from "react";
import Text from "../components/Text";

const About = () => {
  return (
    <div>
      <Text text1={"ABOUT"} text2={"US"}></Text>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="w-1/2 ">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/011/559/310/small_2x/about-us-word-with-wooden-cubes-photo.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2 flex justify-center items-center p-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          sint dolorem facere? Necessitatibus ducimus officia itaque, quam
          scipit temporibus consectetur nulla libero accusamus aperiam ipsam
          repudiandae quod? Laborum fugiat, et non libero repellendus enim atque
          vel sit nemo. Iure quam reiciendis molestias.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
          itaqueat tempore vel eum repellendus, quod cum facilis, reprehenderit
          beatae consectetur atque? Laudantium vel non doloribus!
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis eum
          esse isit nulla cum fuga id qui, ex porro? Ipsam atque eos, voluptatum
          vitae, culpa impedit consectetur corrupti, ducimus temporibus
          veritatis doloremque quisquam repellat ex.
        </div>
      </div>
      <Text text1={"WHY"} text2={"CHOOSES US"}></Text>
      <div className="w-full flex ">
        <div className="w-1/3 border flex flex-col justify-center items-center gap-3 px-15 py-20">
          <p className="font-bold">Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.  blanditiis, a unde officia.</p>
        </div>
        <div className="w-1/3 border flex flex-col justify-center items-center gap-3 px-15 py-20">
          <p className="font-bold">Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.  blanditiis, a unde officia.</p>
        </div>
        <div className="w-1/3 border flex flex-col justify-center items-center gap-3 px-15 py-20">
          <p className="font-bold">Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum doiis, a unde officia.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
