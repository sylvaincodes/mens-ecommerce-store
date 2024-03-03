import React from "react";
import { Row } from "../row";
import CustomTabsContentItems from "./custom-tabs-content-items";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

export default function CustomTabsContent({
  activeTab,
}: {
  activeTab: string;
}) {


  const dresses = [
    {
    title: "Topshop Jamie dress in black",
    price: 30.99,
    discount : 20.99,
    images: "/images/products/dresses/1.jpg"
  },{
    title: "Topshop Jamie dress in black",
    price: 30.99,
    discount : 20.99,
    images: "/images/products/dresses/2.jpg"
  },{
    title: "Topshop Jamie dress in black",
    price: 30.99,
    discount : 20.99,
    images: "/images/products/dresses/3.jpg"
  },{
    title: "Topshop Jamie dress in black",
    price: 30.99,
    discount : 20.99,
    images: "/images/products/dresses/4.jpg"
  }
];

const pajamas = [
    {
    title: "Topshop Jamie dress in black",
    price: 30.99,
    discount : 20.99,
    images: "/images/products/pajamas/1.jpg"
  },{
    title: "Topshop Jamie dress in black",
    price: 30.99,
    discount : 20.99,
    images: "/images/products/pajamas/2.jpg"
  },{
    title: "Topshop Jamie dress in black",
    price: 30.99,
    discount : 20.99,
    images: "/images/products/pajamas/3.jpg"
  },{
    title: "Topshop Jamie dress in black",
    price: 30.99,
    discount : 20.99,
    images: "/images/products/pajamas/4.jpg"
  }
];

const others = [
    {
    title: "Topshop Jamie dress in black",
    price: 30.99,
    discount : 20.99,
    images: "/images/products/others/1.jpg"
  },{
    title: "Topshop Jamie dress in black",
    price: 30.99,
    discount : 20.99,
    images: "/images/products/others/2.jpg"
  },{
    title: "Topshop Jamie dress in black",
    price: 30.99,
    discount : 20.99,
    images: "/images/products/others/3.jpg"
  },{
    title: "Topshop Jamie dress in black",
    price: 30.99,
    discount : 20.99,
    images: "/images/products/others/4.jpg"
  }
];


  return (
    <Row>
      <CustomTabsContentItems title="dresses" activeTab={activeTab} data={dresses} />
      <CustomTabsContentItems title="pajamas" activeTab={activeTab} data={pajamas}/>
      <CustomTabsContentItems title="others" activeTab={activeTab} data={others} />
    </Row>
  );
}
