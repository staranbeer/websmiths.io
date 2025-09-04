"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Subscription() {
  const [startupPlanList, setstartupPlanList] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setstartupPlanList(data?.startupPlanList);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section id="pricing">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="max-w-25 text-center mx-auto">
              <h2>
                Pick the plan that fits your{" "}
                <span className="instrument-font italic font-normal dark:text-white/70">
                  start-up
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 xxl:grid-cols-2 gap-6">
              {startupPlanList?.map((items: any, index: number) => (
                <div
                  className={`${items.plan_bg_color} p-6 md:p-10 rounded-2xl`}
                  key={index}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-12 md:pr-6">
                      <div className="flex flex-col gap-3">
                        <p className="py-2 px-4 bg-dark_black w-fit text-white rounded-full">
                          {items.plan_name}
                        </p>
                        <p className={`text-${items.descp_color}`}>
                          {items.plan_descp}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-4 md:pl-6 md:border-l ${items.border_color}`}
                    >
                      <p className={`${items.text_color}`}>Features</p>
                      <ul className="flex flex-col gap-4">
                        {items.plan_feature?.map(
                          (feature: any, index: number) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center gap-3"
                              >
                                <Image
                                  src={items.icon_img}
                                  alt="icon"
                                  width={20}
                                  height={20}
                                />
                                <p className={`${items.text_color}`}>
                                  {feature}
                                </p>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscription;
