"use client";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import CustomTabs from "@/components/ui/tabs/custom-tabs";
import CustomTabsContent from "@/components/ui/tabs/custom-tabs-content";
import React, { useState } from "react";

export default function TabProductOne() {
  const [activeTab, setActiveTab] = useState<string>("dresses");

  return (
    <section className="mt-20">
      <Container>
        <Heading>
                Categories
        </Heading>
        <CustomTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <CustomTabsContent activeTab={activeTab} />
      </Container>
    </section>
  );
  
}
