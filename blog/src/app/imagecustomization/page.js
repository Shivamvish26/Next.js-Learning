import Image from "next/image";
import React from "react";
import sampleImage from "../../../public/next.svg";

export default function ImageCustomizationPage() {
  return (
    <div>
      <h1>Image Customization Page</h1>
      {/* <Image
            src={sampleImage}
            width={100}
            height={100}
            /> */}
      <Image
        src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&q=80&w=1080&fit=max"
        width={200}
        height={200}
      />
    </div>
  );
}
