import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import gsap from "gsap";
import emailjs from 'emailjs-com'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
}));



const HOLOSCREEN = (props) => {
    function getSteps() {
        return ['YOUR Industry', 'Your Values', 'Interested IN', 'Double Check', 'Information'];
    }
    const initialValue = [{
        index: 0,
        value: false
    }]

    const [toggle, setToggle] = useState(initialValue);
    const [yourValuesToggle, setYourValuesToggle] = useState(initialValue);
    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [additionalInformation, setAdditionalInformation] = useState("");
    const [checkBox, setCheckBox] = useState(false);
    const [checkBoxText, setCheckBoxText] = useState("");

    const emailRegex = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const heading = {
        data: [
            {
                label: "Scoping"
            },
            {
                label: "Concept"
            },
            {
                label: "Prototyping"
            },
            {
                label: "Execution"
            }
        ],
        industry: [
            {
                label: "Construction",
                toggle: false
            },
            {
                label: "Commerce",
                toggle: false

            },
            {
                label: "Other",
                toggle: false
            },
            {
                label: "Music/Arts",
                toggle: false
            },
            {
                label: "Tech",
                toggle: false
            },
            {
                label: "Health And Social Services",
                toggle: false
            },
            {
                label: "Finance",
                toggle: false
            },
            {
                label: "Consulting",
                toggle: false
            }
        ],
        reasons: [
            {
                label: "No Hierarchies",
                toggle: false,
                className: "one-liner"
            },
            {
                label: "Data Based Descision Making",
                toggle: false,
                className: "Data"
            },
            {
                label: "Realisation of passion",
                toggle: false,
                className: "Realisation"
            }
            ,
            {
                label: "Flexible",
                toggle: false,
                className: "one-liner"
            },
            {
                label: "Trust culture",
                toggle: false,
                className: "one-liner"
            },
            {
                label: "Digital Development",
                toggle: false,
                className: "Digital"
            },
            {
                label: "Breaking the Wheel",
                toggle: false,
                className: "Breaking"
            },
            {
                label: "Stick to the tried and tested",
                toggle: false,
                className: "Stick"
            },
            {
                label: "Reclaiming the analog",
                toggle: false,
                className: "Reclaiming"
            },
            {
                label: "Control",
                toggle: false,
                className: "one-liner"
            },
            {
                label: "Team Spirit",
                toggle: false,
                className: "one-liner"
            },
            {
                label: "Transparent Communication",
                toggle: false,
                className: "Transparent"
            },
            {
                label: "Tolerance",
                toggle: false,
                className: "one-liner"
            },
            {
                label: "Lone Wolf",
                toggle: false,
                className: "one-liner"
            },
            {
                label: "Keeping traditions alive",
                toggle: false,
                className: "Keeping"
            }, {
                label: "Out of the box thinking",
                toggle: false,
                className: "thinking"
            }, {
                label: "Clear Hierarchies",
                toggle: false,
                className: "Clear"
            }, {
                label: "Decide according to feeling",
                toggle: false,
                className: "feeling"
            }, {
                label: "Fast cashflow",
                toggle: false,
                className: "one-liner"
            }, {
                label: "Planned",
                toggle: false,
                className: "one-liner"
            }
        ]
    }
    useEffect(() => {
        const hideShow = []
        const yourValuesToggle = []

        heading.industry.forEach((value, index) => {
            hideShow.push({
                index: index,
                value: false
            });
        });

        heading.reasons.forEach((value, index) => {
            yourValuesToggle.push({
                index: index,
                value: false
            });
        });
        setYourValuesToggle(yourValuesToggle)
        setToggle(hideShow);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();
    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = (active) => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
        const data = {
            name: name,
            email: email,
            company: companyName,
            number: phoneNo,
            industry: textShown.industry,
            values: textShown.yourValues.toString(),
            services: servicesInterested.data.toString(),
            message: additionalInformation,
          }
        if (active === 4) {

            if (checkBox === false) {
                setCheckBoxText("You have not agreed to our privacy Policy")

            } else if (checkBox === true) {
                document.querySelector(".close").click();
                emailjs.send('service_je0binl', 'template_zuksvzh', data, 'user_cpF77Jn35lkFuc2h8793u').then(res => {
                    console.log('sent')
                }).catch(err => {
                    console.log(err)
                })
            }
        } else if (active > 4) {
            if (checkBox === false) {
                setCheckBoxText("You have not agreed to our privacy Policy")

            } else if (checkBox === true) {
                document.querySelector(".close").click();
                emailjs.send('service_je0binl', 'template_zuksvzh', data, 'user_cpF77Jn35lkFuc2h8793u').then(res => {
                    console.log('sent')
                }).catch(err => {
                    console.log(err)
                })
                setCheckBoxText("")
            }

        }




    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const handleReset = () => {
        setIndustryHexagons(true);
        const hideShow = []

        heading.industry.forEach((value, index) => {
            hideShow.push({
                index: index,
                value: false
            });
        });
        setToggle(hideShow)
    };
    const handleResetReasons = () => {
        setReasonsHexagons(true);
        const yourValuesToggle = []
        heading.reasons.forEach((value, index) => {
            yourValuesToggle.push({
                index: index,
                value: false
            });
        });
        const params = {
            industry: textShown.industry,
            yourValues: []
        }
        setTextShown(params)
        setYourValuesToggle(yourValuesToggle)
    };

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
    };

    const settingsTVScreen = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rows: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const holoScreenText = `<p class="modal-paragraph">Before we build the house, we first look at the surroundings. In other words: a lot of analyses. What? Why? For whom? How? And who are our neighbors?</p><p class="margin-bottom-42">
    So we become more and more specific and conclude this step with a rough blueprint.</p>`
    const params = {
        industry: "",
        yourValues: []
    }

    const [showText, setshowText] = useState(holoScreenText);
    const [hideShow, setHideShow] = useState(true);
    const [textServices, settextServices] = useState("");
    const [industryHexagons, setIndustryHexagons] = useState(true);
    const [reasonsHexagons, setReasonsHexagons] = useState(true);
    const [textShown, setTextShown] = useState(params);
    const [addRemoveClassBrandingProduct, setAddRemoveClassBrandingProduct] = useState(false);
    const [addRemoveClassBrandingPersonal, setAddRemoveClassBrandingPersonal] = useState(false);
    const [addRemoveClassBrandingCoorperate, setAddRemoveClassBrandingCooperate] = useState(false);

    const [addRemoveClassVRAR, setAddRemoveClassVRAR] = useState(false);
    const [addRemoveClassImmersiveWeb, setAddRemoveClassImmersiveWeb] = useState(false);
    const [addRemoveClass3DProductCreation, setAddRemoveClass3DProductCreation] = useState(false);

    const [addRemoveClassAugmented, setAddRemoveClassAugmented] = useState(false);
    const [addRemoveClassImmersiveTech, setAddRemoveClassImmersiveTech] = useState(false);
    const [addRemoveClassExperienceMarketing, setAddRemoveClassExperienceMarketing] = useState(false);

    const [checkHide, setCheckHide] = useState(false);


    const interestedIn = {
        data: []
    }

    const [servicesInterested, setServicesInterested] = useState(interestedIn);




    const overviewServices = {
        data: [
            {
                title: "Branding",
                text: `<p class="first-paragraph">
                Branding (/ˈbrandɪŋ/) gives a company, a product and a person character, makes its identity visible and gives it a sexy cover. Branding also lays the foundation for everything else.</p><p class="first-paragraph">
                Your friends love you for your personality and style, they share your values and humor, they know your strengths and weaknesses and would recognize your voice at any carnival.
                Create friendships with your customers!</p>`,
                branch: [
                    {
                        label: "Cooperate Branding",
                    },
                    {
                        label: "Personal Branding",
                    },
                    {
                        label: "Product Branding",
                    }

                ]
            },
            {
                title: "Immersive Design & Development",
                text: `<p class="second-paragraph">Immersive technologies offer the possibility of expanding our reality or even immersing in to a new one. It's about real experiences with lasting memories, about emotions and excitement.</p>`,
                branch: [
                    {
                        label: "VR & AR",
                    },
                    {
                        label: "3D Product Creation",
                    },
                    {
                        label: "Immersive Web Apps",
                    }

                ]
            },
            {
                title: "Consulting",
                text: `<p class="second-paragraph">Are you keen on the advantages of immersive technologies, but don't know where and how to start? Our experienced team will show you the possibilities and advise you and your company individually - until you are sure you can go full throttle on your own!</p>`,
                branch: [
                    {
                        label: "Experince Marketing",
                    },
                    {
                        label: "Immersive Tech",
                    },
                    {
                        label: "Augmented Productivity",
                    }

                ]
            },
        ]
    }


    const hexagonShowText = (text, index) => {
        if (text === "Concept") {
            setshowText(holoScreenText)
        } else if (text === "Scoping") {
            setshowText(holoScreenText)
        } else if (text === "Prototyping") {
            setshowText(holoScreenText)
        } else if (text === "Execution") {
            setshowText(holoScreenText)
        }
    }


    const hexagonIndustry = (text, index, toggleIndex) => {
        let select = toggle
        select[index].value = !toggle[index].value;
        let addClass = heading.industry
        addClass[index].toggle = !toggle[index].value;
        const tl = gsap.timeline({ paused: true, reversed: true });
        tl.from(".hexagon-top", { duration: 3, autoAlpha: 0 });
        tl.reversed() ? tl.play() : tl.reverse();
        const params = {
            industry: text,
            yourValues: []
        }
        setIndustryHexagons(false)


        setTextShown(params)

        setToggle(select)

    }


    const handleYourValues = (text, index, toggleIndex) => {
        let select = yourValuesToggle
        select[index].value = !yourValuesToggle[index].value;

        let data = !checkHide;
        setCheckHide(data)

        textShown.yourValues.push({
            name: text
        });

        setYourValuesToggle(select)
        if (textShown.yourValues.length === 5) {
            const result = textShown.yourValues.reduce((acc, item) => {
                if (!acc.find(other => item.name === other.name)) {
                    acc.push(item);
                }

                return acc;
            }, []);
            const params = {
                industry: textShown.industry,
                yourValues: result
            }
            setTextShown(params);
            setReasonsHexagons(false);
        }

    }
    const showServiceText = (text) => {
        if (text === "Cooperate Branding") {
            settextServices(`<p class="paragraph">The company becomes unique and trustworthy</p>`);
        } else if (text === "Personal Branding") {
            settextServices(`<p class="paragraph">The human as a brand</p>`);

        } else if (text === "Product Branding") {
            settextServices(`<p class="paragraph">The product with which you can identify yourself</p>`);

        } else if (text === "VR & AR") {
            settextServices(`<p class="paragraph">Virtual spaces and the use of augmented reality - enabling a new, unique way of experiencing. Art, events, real estate, festivals, showrooms, everything is possible!</p>`);

        } else if (text === "3D Product Creation") {
            settextServices(`<p class="paragraph">The product can be experienced! Flexible and dynamic, every centimeter and angle can be viewed in detail. Conviction, trust & purchase!</p>`);

        } else if (text === "Immersive Web Apps") {
            settextServices(`<p class="paragraph">Websites were yesterday - we create Web Spaces for today and tomorrow! For desktop, mobile, VR and AR devices - accessible for everything and everyone.</p>`);

        } else if (text === "Experince Marketing") {
            settextServices(`<p class="paragraph">Marketing measures that are remembered, create experiences, build trust and produce happy, loyal customers - but how? We advise you with the possibilities of Experience Marketing so that you can raise yourself and your business to a unique level.</p>`);

        } else if (text === "Immersive Tech") {
            settextServices(`<p class="paragraph">Immersive technologies are conquering the digital world and opening up unimagined opportunities. The possibilities and potential are limitless. We guide you through the immersive tech world and show you useful applications for you and your business!</p>`);

        } else if (text === "Augmented Productivity") {
            settextServices(`<p class="first-paragraph">How do you keep the team spirit and stay productive when the home office is preferred, or the team is international?
            </p> <p class="first-paragraph">We show you the possibilities of digital, virtual office space, and how to enhance your productivity with modern technologies.</p>`);
        }
        setHideShow(false)

    }
    const hideElement = (text) => {
        setHideShow(true)
    }
    const interestedInProduct = (heading, subHeading) => {
        if (heading === "Branding") {
            servicesInterested.data.push({
                name: subHeading
            });
            servicesInterested.data.reduce((acc, item) => {
                if (!acc.find(other => item.name === other.name)) {
                    acc.push(item);
                }

                return acc;
            }, []);

            setServicesInterested(servicesInterested)
            if (subHeading === "Product Branding") {
                const data = !addRemoveClassBrandingProduct;
                setAddRemoveClassBrandingProduct(data)
            } else if (subHeading === "Personal Branding") {
                const data = !addRemoveClassBrandingPersonal;

                setAddRemoveClassBrandingPersonal(data)
            } else if (subHeading === "Cooperate Branding") {
                const data = !addRemoveClassBrandingCoorperate;
                setAddRemoveClassBrandingCooperate(data)
            }

        }

    }
    const interestedInImmersive = (heading, subHeading) => {
        if (heading === "ImmersiveDesign") {
            servicesInterested.data.push({
                name: subHeading
            });
            servicesInterested.data.reduce((acc, item) => {
                if (!acc.find(other => item.name === other.name)) {
                    acc.push(item);
                }

                return acc;
            }, []);


            setServicesInterested(servicesInterested)

            if (subHeading === "VR&AR") {
                const data = !addRemoveClassVRAR;
                setAddRemoveClassVRAR(data)
            } else if (subHeading === "3D Product Creation") {
                const data = !addRemoveClass3DProductCreation;
                setAddRemoveClass3DProductCreation(data)

            } else if (subHeading === "Immersive Web Apps") {
                const data = !addRemoveClassImmersiveWeb;
                setAddRemoveClassImmersiveWeb(data)

            }
        }

    }
    const interestedInConsulting = (heading, subHeading) => {
        if (heading === "Consulting") {
            servicesInterested.data.push({
                name: subHeading
            });
            servicesInterested.data.reduce((acc, item) => {
                if (!acc.find(other => item.name === other.name)) {
                    acc.push(item);
                }

                return acc;
            }, []);

            setServicesInterested(servicesInterested)
            if (subHeading === "Experience Marketing") {
                const data = !addRemoveClassExperienceMarketing;
                setAddRemoveClassExperienceMarketing(data)
            } else if (subHeading === "Immersive Tech") {
                const data = !addRemoveClassImmersiveTech;
                setAddRemoveClassImmersiveTech(data)
            } else if (subHeading === "Augmented Productivity") {
                const data = !addRemoveClassAugmented;
                setAddRemoveClassAugmented(data)
            }
        }
    }


    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <>
                        <div class="your-industry">
                            <span>
                                Your Industry?
                            </span>
                        </div>
                        {industryHexagons === true ?

                            props.status === "You" ?
                                <div className="about-you-industry">
                                    <div className="container-about">

                                        <div className="row-about-you">
                                            {heading.industry.map((value, index) =>
                                                <div key={`${value}-${index}`} className={`about-you-rectangle  ${toggle[index]?.value === false ? "remove-hexagon" : "add-hexagon"}`} onClick={() => hexagonIndustry(value.label, index)}>
                                                    <h5>
                                                        {value.label}
                                                    </h5>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div> :
                                <div className="row">
                                    {heading.industry.map((value, index) =>

                                        <div key={`${value.id}-${index}`} className="col-lg-2">
                                            <div class="hexagon-wrapper">
                                                <div className={`hexagon ${toggle[index]?.value === false ? "remove-hexagon" : "add-hexagon"}`} onClick={() => hexagonIndustry(value.label, index)}>
                                                    <h5>
                                                        {value.label}
                                                    </h5>
                                                </div>

                                            </div>
                                        </div>
                                    )}
                                </div>


                            :
                            props.status === "You" ? <div className="selected-industry">

                                <div className="about-you-rectangle">
                                    <h5>
                                        {textShown.industry}
                                    </h5>
                                </div>

                            </div> : <div className="margin-bottom-128">
                                <div class="hexagon-wrapper">
                                    <div className={`hexagon hexagon-top add-hexagon`}>
                                        <h5>
                                            {textShown.industry}
                                        </h5>
                                    </div>

                                </div>

                            </div>



                        }



                    </>
                )
            case 1:
                return (
                    <>
                        <div class="your-industry">
                            <span>
                                Your Values ?
                            </span>
                            <p className="p-resonate">
                                select 5 that you resonate with
                            </p>
                        </div>
                        {
                            reasonsHexagons === true ?
                                props.status === "You" ?
                                    <div className="about-you-reasons">
                                        <div className="container-about">

                                            <div className="row-about-you">
                                                {heading.reasons.map((value, index) =>
                                                    <div key={`${value}-${index}`} className={`about-you-rectangle ${value.className} ${yourValuesToggle.length > 0 ? yourValuesToggle[index].value === false ? "remove-hexagon" : "add-hexagon" : ""} `} onClick={() => handleYourValues(value.label, index)}>
                                                        <h5>
                                                            {value.label}
                                                        </h5>
                                                    </div>
                                                )}
                                            </div>
                                        </div>  </div> : <Slider {...settingsTVScreen}>
                                        {heading.reasons.map((value, index) =>

                                            <div className="row" >

                                                <div key={`${value}-${index}`} className="col-lg-2">
                                                    <div class="hexagon-wrapper">
                                                        <div className={`hexagon ${yourValuesToggle.length > 0 ? yourValuesToggle[index].value === false ? "remove-hexagon" : "add-hexagon" : ""} `} onClick={() => handleYourValues(value.label, index)}>
                                                            <h5>
                                                                {value.label}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                    </Slider>
                                :
                                props.status === "You" ? <div className="about-you-reasons">
                                    <div className="container-about">

                                        <div className="row-about-you">
                                            {textShown.yourValues.map((value, index) =>
                                                <div key={`${value}-${index}`} className="about-you-rectangle add-hexagon ">
                                                    <h5>
                                                        {value.name}
                                                    </h5>
                                                </div>
                                            )}
                                        </div>
                                    </div>  </div> : <div className="row" >

                                    {
                                        textShown.yourValues.map((value, index) =>
                                            <div key={`${value}-${index}`} className="col-lg-2">
                                                <div class="hexagon-wrapper">
                                                    <div className={`hexagon add-hexagon`}>
                                                        <h5>
                                                            {value.name}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                </div>


                        }


                    </>
                )
            case 2:
                return (
                    <>
                        {props.status === "You" ?
                            <>
                                <div className="text-layout">

                                    <h5 className="hide-span">
                                        What services are you interested in?
                                    </h5>
                                    <h5 className="show-span">
                                        Your Services?
                                    </h5>

                                </div>

                                <div className="about-you-services">

                                    <div className="row-about-you">
                                        <div className="about-you-top-heading" >
                                            <h5>
                                                Branding
                                            </h5>
                                        </div>
                                        <div className="about-you-top-heading mobile-heading" >
                                            <h5>
                                                Immersive Design & Development
                                            </h5>
                                        </div>
                                        <div className="about-you-top-heading" >
                                            <h5>
                                                Consulting
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="row-about-you">
                                        <div onClick={() => interestedInProduct("Branding", "Cooperate Branding")} className={`about-you-rectangle ${addRemoveClassBrandingCoorperate === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                Corporate Branding
                                            </h5>
                                        </div>
                                        <div onClick={() => interestedInImmersive("ImmersiveDesign", "3D Product Creation")} className={`about-you-rectangle ${addRemoveClass3DProductCreation === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                3D Product Creation
                                            </h5>
                                        </div>
                                        <div onClick={() => interestedInConsulting("Consulting", "Augmented Productivity")} className={`about-you-rectangle ${addRemoveClassAugmented === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                Augmented Productivity
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="row-about-you">
                                        <div onClick={() => interestedInProduct("Branding", "Personal Branding")} className={`about-you-rectangle ${addRemoveClassBrandingPersonal === true ? "add-color" : "remove-color"}`}>
                                            <h5>
                                                Personal Branding
                                            </h5>
                                        </div>
                                        <div onClick={() => interestedInImmersive("ImmersiveDesign", "Immersive Web Apps")} className={`about-you-rectangle ${addRemoveClassImmersiveWeb === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                Immersive Web Apps
                                            </h5>
                                        </div>
                                        <div onClick={() => interestedInConsulting("Consulting", "Experience Marketing")} className={`about-you-rectangle ${addRemoveClassExperienceMarketing === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                Experience Marketing
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="row-about-you">
                                        <div onClick={() => interestedInProduct("Branding", "Product Branding")} className={`about-you-rectangle ${addRemoveClassBrandingProduct === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                Product Branding
                                            </h5>
                                        </div>
                                        <div onClick={() => interestedInImmersive("ImmersiveDesign", "VR&AR")} className={`about-you-rectangle ${addRemoveClassVRAR === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                VR & AR
                                            </h5>
                                        </div>
                                        <div onClick={() => interestedInConsulting("Consulting", "Immersive Tech")} className={`about-you-rectangle ${addRemoveClassImmersiveTech === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                Immersive Tech
                                            </h5>
                                        </div>
                                    </div>

                                    <div className="row-about-you-mobile">
                                        <div className="about-you-top-heading" >
                                            <h5>
                                                Branding
                                            </h5>
                                        </div>



                                        <div onClick={() => interestedInProduct("Branding", "Cooperate Branding")} className={`about-you-rectangle ${addRemoveClassBrandingCoorperate === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                Corporate Branding
                                            </h5>
                                        </div>
                                        <div onClick={() => interestedInProduct("Branding", "Personal Branding")} className={`about-you-rectangle ${addRemoveClassBrandingPersonal === true ? "add-color" : "remove-color"}`}>
                                            <h5>
                                                Personal Branding
                                            </h5>
                                        </div>
                                        <div onClick={() => interestedInProduct("Branding", "Product Branding")} className={`about-you-rectangle ${addRemoveClassBrandingProduct === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                Product Branding
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="row-about-you-mobile">
                                        <div className="about-you-top-heading mobile-heading" >
                                            <h5>
                                                Immersive Design & Development
                                            </h5>
                                        </div>
                                        <div onClick={() => interestedInImmersive("ImmersiveDesign", "3D Product Creation")} className={`about-you-rectangle ${addRemoveClass3DProductCreation === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                3D Product Creation
                                            </h5>
                                        </div>
                                        <div onClick={() => interestedInImmersive("ImmersiveDesign", "Immersive Web Apps")} className={`about-you-rectangle ${addRemoveClassImmersiveWeb === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                Immersive Web Apps
                                            </h5>
                                        </div>
                                        <div onClick={() => interestedInImmersive("ImmersiveDesign", "VR&AR")} className={`about-you-rectangle ${addRemoveClassVRAR === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                VR & AR
                                            </h5>
                                        </div>

                                    </div>
                                    <div className="row-about-you-mobile">
                                        <div className="about-you-top-heading" >
                                            <h5>
                                                Consulting
                                            </h5>
                                        </div>
                                        <div onClick={() => interestedInConsulting("Consulting", "Experience Marketing")} className={`about-you-rectangle ${addRemoveClassExperienceMarketing === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                Experience Marketing
                                            </h5>
                                        </div>

                                        <div onClick={() => interestedInConsulting("Consulting", "Immersive Tech")} className={`about-you-rectangle ${addRemoveClassImmersiveTech === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                Immersive Tech
                                            </h5>
                                        </div>
                                        <div onClick={() => interestedInConsulting("Consulting", "Augmented Productivity")} className={`about-you-rectangle ${addRemoveClassAugmented === true ? "add-color" : "remove-color"}`} >
                                            <h5>
                                                Augmented Productivity
                                            </h5>
                                        </div>
                                    </div>




                                </div> </> :


                            <div className="margin-bottom">
                                <div class="your-industry">
                                    <span>
                                        What services are you interested in?
                                    </span>

                                </div>
                                <figure class="hexagon-branding">
                                    <div class="hexagon"
                                    >
                                        <h5>
                                            Branding
                                        </h5>
                                    </div>

                                    <div class="hexagon-wrapper">
                                        <div class={`hexagon ${addRemoveClassBrandingProduct === true ? "add-hexagon" : "remove-hexagon"}`} onClick={() => interestedInProduct("Branding", "Product Branding")}>
                                            <h5>
                                                Product Branding
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="hexagon-wrapper-personal">
                                        <div class={`hexagon ${addRemoveClassBrandingPersonal === true ? "add-hexagon" : "remove-hexagon"}`} onClick={() => interestedInProduct("Branding", "Personal Branding")}>
                                            <h5>
                                                Personal Branding
                                            </h5>
                                        </div>

                                    </div>
                                    <div className="hexagon-wrapper-product">
                                        <div class={`hexagon ${addRemoveClassBrandingCoorperate === true ? "add-hexagon" : "remove-hexagon"}`} onClick={() => interestedInProduct("Branding", "Cooperate Branding")}>
                                            <h5>
                                                Cooperate Branding
                                            </h5>
                                        </div>
                                    </div>


                                </figure>

                                <figure class="hexagon-immersive">
                                    <div class="hexagon">
                                        <h5>
                                            Immersive Design & Development
                                        </h5>
                                    </div>

                                    <div class="hexagon-wrapper">
                                        <div class={`hexagon ${addRemoveClassVRAR === true ? "add-hexagon" : "remove-hexagon"}`} onClick={() => interestedInImmersive("ImmersiveDesign", "VR&AR")}>
                                            <h5>
                                                VR & AR
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="hexagon-wrapper-personal">
                                        <div class={`hexagon ${addRemoveClass3DProductCreation === true ? "add-hexagon" : "remove-hexagon"}`} onClick={() => interestedInImmersive("ImmersiveDesign", "3D Product Creation")}>
                                            <h5>
                                                3D Product Creation
                                            </h5>
                                        </div>

                                    </div>
                                    <div className="hexagon-wrapper-product">
                                        <div class={`hexagon ${addRemoveClassImmersiveWeb === true ? "add-hexagon" : "remove-hexagon"}`} onClick={() => interestedInImmersive("ImmersiveDesign", "Immersive Web Apps")}>
                                            <h5>
                                                Immersive Web Apps
                                            </h5>
                                        </div>
                                    </div>


                                </figure>

                                <figure class="hexagon-consulting">
                                    <div class="hexagon">
                                        <h5>
                                            Consulting
                                        </h5>
                                    </div>

                                    <div class="hexagon-wrapper">
                                        <div class={`hexagon ${addRemoveClassExperienceMarketing === true ? "add-hexagon" : "remove-hexagon"}`} onClick={() => interestedInConsulting("Consulting", "Experience Marketing")}>
                                            <h5>
                                                Experience Marketing
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="hexagon-wrapper-personal">
                                        <div class={`hexagon ${addRemoveClassImmersiveTech === true ? "add-hexagon" : "remove-hexagon"}`} onClick={() => interestedInConsulting("Consulting", "Immersive Tech")}>
                                            <h5>
                                                Immersive Tech
                                            </h5>
                                        </div>

                                    </div>
                                    <div className="hexagon-wrapper-product">
                                        <div class={`hexagon ${addRemoveClassAugmented === true ? "add-hexagon" : "remove-hexagon"}`} onClick={() => interestedInConsulting("Consulting", "Augmented Productivity")}>
                                            <h5>
                                                Augmented Productivity
                                            </h5>
                                        </div>
                                    </div>


                                </figure>

                            </div>

                        }

                    </>
                );
            case 3:
                return (
                    <>

                        {props.status === "You" ? <div className="double-check">
                            <div className="card">
                                <div className="card-body ">
                                    <h3 className="double-display">Let's double check</h3>
                                    <p className="double-display">Are you sure you filled in everythingh correctly? Now is your chance to correct or even reconsider your entry.</p>
                                    <p className="double-display">Afterwards we need some personal information from you which we will of course treat confidentially</p>
                                    <p className="double-display">Thank you for your honesty</p>
                                </div>

                            </div>
                            <div className="noted">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Your Industry</h3>
                                        <p>{textShown.industry === "" ? <h4> .... </h4> : textShown.industry}</p>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body ">
                                        <h3>Your Values</h3>
                                        {
                                            textShown.yourValues.length > 0 ? <div className="d-flex">
                                                <ul>
                                                    {
                                                        textShown.yourValues.map((value, index) =>
                                                            <li>
                                                                {value.name}
                                                            </li>
                                                        )
                                                    }


                                                </ul>

                                            </div> : <h4> .... </h4>
                                        }


                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body ">
                                        <h3>Your Services</h3>
                                        {servicesInterested.data.length > 0 ? <div className="d-flex">
                                            <ul>
                                                {
                                                    servicesInterested.data.length > 0 ? servicesInterested.data.slice(0, 4).map((value, index) =>
                                                        <li>
                                                            {index === 3 ? <div> {value.name} <br /> {"+" + (servicesInterested.data.length - 4) + " more"} </div> : value.name}
                                                        </li>
                                                    ) : "...."
                                                }

                                            </ul>

                                        </div> : <h4> .... </h4>}


                                    </div>
                                </div>
                            </div>
                        </div>
                            :
                            <div>
                                <div className="row">
                                    <div className="card">
                                        <div className="card-body ">
                                            <h3>Let's double check</h3>
                                            <p>Are you sure you filled in everythingh correctly? Now is your chance to correct or even reconsider your entry.</p>
                                            <p>Afterwards we need some personal information from you which we will of course treat confidentially</p>
                                            <p>Thank you for your honesty</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <h3>Your Industry</h3>
                                                <p>{textShown.industry === "" ? "...." : textShown.industry}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="card">
                                            <div className="card-body ">
                                                <h3>Your Values</h3>
                                                <div className="d-flex">
                                                    <ul>
                                                        {
                                                            textShown.yourValues.map((value, index) =>
                                                                <li>
                                                                    {value.name}
                                                                </li>
                                                            )
                                                        }


                                                    </ul>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="card">
                                            <div className="card-body ">
                                                <h3>Your Services</h3>
                                                <div className="d-flex">
                                                    <ul>
                                                        {
                                                            servicesInterested.data.length > 0 ? servicesInterested.data.slice(0, 5).map((value, index) =>
                                                                <li>
                                                                    {value.name}
                                                                </li>
                                                            ) : "...."
                                                        }

                                                    </ul>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }


                    </>
                )
            default:
                return (
                    <>
                        <div className="row mobile-row">
                            <div className="card">
                                <div className="card-body ">
                                    <h3 className="">Information</h3>
                                    <div class="container">
                                        <div class="content">
                                            <form action="#">
                                                <div class="user-details">
                                                    <div class="input-box">
                                                        <input type="text" placeholder="Name" value={name}
                                                            onChange={e => setName(e.target.value)} />
                                                    </div>
                                                    <div class="input-box">
                                                        <input type="text" placeholder="Company Name (Optional)" value={companyName}
                                                            onChange={e => setCompanyName(e.target.value)} />
                                                    </div>
                                                    <div class="input-box">
                                                        <input type="text" value={email}
                                                            onChange={e => setEmail(e.target.value)} placeholder="Email" />
                                                        {
                                                            email !== "" ? !emailRegex.test(email) ? <p> Please enter Valid </p> : "" : ""
                                                        }
                                                    </div>
                                                    <div class="input-box">
                                                        <input type="text" value={phoneNo}
                                                            onChange={e => setPhoneNo(e.target.value)} placeholder="Phone Number (Optional)" />
                                                    </div>

                                                    <textarea value={additionalInformation}
                                                        onChange={e => setAdditionalInformation(e.target.value)} name="" id="" cols="20" rows="4" placeholder=" Additional Information"></textarea>
                                                    <div>
                                                        <label htmlFor="" className="label-contact">
                                                            <input type="checkbox" value={checkBox} onChange={e => setCheckBox(e.currentTarget.checked)} />
                                                            I have read and agree to the use of the &nbsp; <a target='_blank' href="https://upnup.ch/privacy.html" rel="noreferrer" style={{ color: "#54ffb7" }}>
                                                                Privacy Policy
                                                            </a>

                                                        </label>
                                                        {checkBoxText}

                                                    </div>



                                                </div>
                                            </form>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </>
                )
        }
    }
    return (
        <>
            <div id="holoModal" className="modal side">

                <div className={props.tvScreen === "TV" ? `modal-content ${props.status === "You" ? "branding-about-content-you" : "custom-modal-content"}` : "modal-content"}>
                    {
                        props.status === "You" ? "" : <div className="close">&times;</div>
                    }
                    {
                        props.tvScreen === "TV" ?
                            <div className="tv-screen">

                                <div className={classes.root}>
                                    <Stepper activeStep={activeStep}>
                                        {steps.map((label, index) => {
                                            const stepProps = {};
                                            const labelProps = {};
                                            if (isStepOptional(index)) {
                                                labelProps.optional = <Typography variant="caption">Optional</Typography>;
                                            }
                                            if (isStepSkipped(index)) {
                                                stepProps.completed = false;
                                            }
                                            return (
                                                <Step key={label} {...stepProps}>
                                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                                </Step>
                                            );
                                        })}
                                    </Stepper>
                                    <div>

                                        <div>
                                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                            <div className={`responsive-btn ${props.status === "You" ? `responsive-btn ${activeStep === 1 ? "values-btn" : activeStep === 2 ? "services-btn" : activeStep === 3 || activeStep === 4 ? "remain-btn" : ""}` : ""}`}>
                                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                                    Back
                                                </Button>

                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => handleNext(activeStep)}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Send' : activeStep > 4 ? "Send" : "Next"}
                                                </Button>
                                                {
                                                    activeStep === 0 ? <Button onClick={handleReset} variant="contained"
                                                        color="primary" className={classes.button}>
                                                        Reset
                                                    </Button> : ""
                                                }
                                                {
                                                    activeStep === 1 ? <Button onClick={handleResetReasons} variant="contained"
                                                        color="primary" className={classes.button}>
                                                        Reset
                                                    </Button> : ""
                                                }

                                            </div>
                                        </div>

                                    </div>
                                </div>



                            </div> :
                            <Slider {...settings} >
                                <div>
                                    <div class="services-tags">
                                        <p>
                                            About us
                                        </p>
                                    </div>
                                    <div className="about-us">
                                        <p className="about-us-paragraph-first">
                                            Upnup is the pionieer in the digital development and the driving force in redesigning the digital world-we create unique experiences, form identities and shape new dimensions. We are always on the cutting edge and on the pulse of life. We are disruptive, curious and brave!
                                        </p>
                                        <p className="about-us-paragraph-second">
                                            This is how we bring companies in touch with generation Z and on the path to success. This is how we bring Europe back on the technological and communicative map, back in the competition of the tech industry.
                                        </p>
                                    </div>

                                </div>


                                <div>
                                    <div className="margin-top">
                                        <figure class="hexagon-branding">
                                            <div class="hexagon"
                                            >
                                                <h5>
                                                    Branding
                                                </h5>
                                            </div>

                                            <div class="hexagon-wrapper">
                                                <div class="hexagon"  >
                                                    <h5>
                                                        Product Branding
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="hexagon-wrapper-personal">
                                                <div class="hexagon">
                                                    <h5>
                                                        Personal Branding
                                                    </h5>
                                                </div>

                                            </div>
                                            <div className="hexagon-wrapper-product">
                                                <div class="hexagon">
                                                    <h5>
                                                        Cooperate Branding
                                                    </h5>
                                                </div>
                                            </div>


                                        </figure>

                                        <figure class="hexagon-immersive">
                                            <div class="hexagon">
                                                <h5>
                                                    Immersive Design & Development
                                                </h5>
                                            </div>

                                            <div class="hexagon-wrapper">
                                                <div class="hexagon">
                                                    <h5>
                                                        VR & AR
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="hexagon-wrapper-personal">
                                                <div class="hexagon">
                                                    <h5>
                                                        3D Product Creation
                                                    </h5>
                                                </div>

                                            </div>
                                            <div className="hexagon-wrapper-product">
                                                <div class="hexagon">
                                                    <h5>
                                                        Immersive Web Apps
                                                    </h5>
                                                </div>
                                            </div>


                                        </figure>

                                        <figure class="hexagon-consulting">
                                            <div class="hexagon">
                                                <h5>
                                                    Consulting
                                                </h5>
                                            </div>

                                            <div class="hexagon-wrapper">
                                                <div class="hexagon">
                                                    <h5>
                                                        Experience Marketing
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="hexagon-wrapper-personal">
                                                <div class="hexagon">
                                                    <h5>
                                                        Immersive Tech
                                                    </h5>
                                                </div>

                                            </div>
                                            <div className="hexagon-wrapper-product">
                                                <div class="hexagon">
                                                    <h5>
                                                        Augmented Productivity
                                                    </h5>
                                                </div>
                                            </div>


                                        </figure>

                                    </div>

                                    <p className="service-overview">
                                        Service Overview
                                    </p>


                                </div>

                                {overviewServices.data.map((value, index) =>
                                    <div className="branding" key={`${value.title}-${index}`}>

                                        <div className="row">
                                            <div className="col-lg-4">
                                                <figure class="hexagon-branding">
                                                    <div class="hexagon">
                                                        <h5>
                                                            {value.title}
                                                        </h5>
                                                    </div>
                                                    <div class="hexagon-wrapper">
                                                        <div class="hexagon" onMouseEnter={() => showServiceText(value.branch[0].label)}
                                                            onMouseLeave={() => hideElement(value.branch[0].label)}>
                                                            <h5>
                                                                {value.branch[0].label}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="hexagon-wrapper-personal">
                                                        <div class="hexagon" onMouseEnter={() => showServiceText(value.branch[1].label)}
                                                            onMouseLeave={() => hideElement(value.branch[1].label)}>
                                                            <h5>
                                                                {value.branch[1].label}

                                                            </h5>
                                                        </div>

                                                    </div>
                                                    <div className="hexagon-wrapper-product">
                                                        <div class="hexagon" onMouseEnter={() => showServiceText(value.branch[2].label)} onMouseLeave={() => hideElement(value.branch[2].label)} >
                                                            <h5>
                                                                {value.branch[2].label}
                                                            </h5>
                                                        </div>
                                                    </div>

                                                </figure>
                                            </div>
                                            <div className="col-lg-6">
                                                <div id="services" dangerouslySetInnerHTML={{ __html: hideShow === true ? value.text : textServices }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <div class="services-tags">
                                        <p>
                                            Workflow
                                        </p>
                                    </div>

                                    <div className="modal-body" dangerouslySetInnerHTML={{ __html: showText }}>

                                    </div>
                                    <div className="row">
                                        {heading.data.map((value, index) =>
                                            <div key={`${value.id}-${index}`} className="col-lg-2">
                                                <div class="hexagon-wrapper">
                                                    <div class="hexagon" onClick={() => hexagonShowText(value.label, index)}>
                                                        <h5>
                                                            {value.label}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                    </div>


                                </div>

                            </Slider>


                    }

                </div>
            </div>
        </>
    )
}


export default HOLOSCREEN