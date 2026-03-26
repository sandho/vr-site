import Image from "next/image";

export default function WhatWeBuild() {
  return (
    <div id="solutions" className="mxd-section overflow-hidden padding-pre-title">
      <div className="mxd-container grid-container">
        {/* Block - Services Cards Start */}
        <div className="mxd-block">
          <div className="mxd-services-cards-s">
            <div className="container-fluid px-0">
              <div className="row gx-0">

                {/* 01 — Digital Twins */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right">
                  <div className="mxd-services-cards-s__inner justify-center bg-base-tint radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <p className="t-small anim-uni-in-up" style={{ opacity: 0.5 }}>01</p>
                      <h3 className="anim-uni-in-up">
                        Digital Twins
                      </h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline anim-uni-in-up">Manufacturing</span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">Industrial</span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">Data-Connected</span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">VR / Web</span>
                      </div>
                      <p className="anim-uni-in-up">
                        Photorealistic 1:1 replicas of your machinery and
                        environments. Interactive, data-connected, and deployable
                        on VR or web — with engineering-level fidelity.
                      </p>
                    </div>
                  
                  </div>
                </div>

                {/* 02 — VR Training */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <div className="mxd-services-cards-s__inner justify-center bg-accent radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <p className="t-small anim-uni-in-up" style={{ opacity: 0.6 }}>02</p>
                      <h3 className="opposite anim-uni-in-up">VR Training</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">Safety</span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">Onboarding</span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">STEP Framework™</span>
                      </div>
                      <p className="t-opposite anim-uni-in-up">
                        Immersive training simulators that reduce onboarding time
                        by 40%. Built on our proprietary STEP Framework™ —
                        story, tension, emotion, place.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 03 — AR Visualization */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right">
                  <div className="mxd-services-cards-s__inner justify-center bg-additional radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <p className="t-small anim-uni-in-up" style={{ opacity: 0.6 }}>03</p>
                      <h3 className="anim-uni-in-up">AR Visualization</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline anim-uni-in-up">WebAR</span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">Visualization</span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">Real Estate</span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">No Headset</span>
                      </div>
                      <p className="t-bright anim-uni-in-up">
                        Web-based AR that lets clients explore spaces, products,
                        and processes in real context — without a headset. Runs
                        in any browser.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Block - Services Cards End */}
      </div>
    </div>
  );
}
