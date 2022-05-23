import React from "react";

import { postRavisojitra } from "service/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { List } from "components/List";

const FigmatoreactPage = () => {
  const [apiData, setapiData] = React.useState();

  function callApi() {
    const req = { data: { test: "test", test2: "test2" } };
    postRavisojitra(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
        toast.error("ets");
      });
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-dmsans items-center justify-start mx-[auto] w-[100%]"
        compId="150:254"
        comWidth={1400}
        comHeight={6036}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="lg:mt-[24px] xl:mt-[27px] mt-[30px] 3xl:mt-[37px] mx-[auto] w-[84%]"
          compId="2"
          comWidth={1170}
          comHeight={40}
          compLeft={10}
          compRight={10}
          compType="Header"
        >
          <Row
            className="items-start justify-between w-[100%]"
            compId="150:292"
            comWidth={1170}
            comHeight={40}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-bold xl:ml-[1px] lg:ml-[1px] ml-[2px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-fs19 xl:text-fs21 text-fs24 3xl:text-fs29 text-indigo_900 text-left tracking-ls1 w-[9%]"
              compId="I150:300;150:9"
              comWidth={106}
              comHeight={32}
              compLeft={2}
              compRight={0}
              compType="Text"
            >{`Startup 3`}</Text>
            <Row
              className="items-center justify-between w-[51%]"
              compId="397:31"
              comWidth={597}
              comHeight={40}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Row
                className="items-center justify-between lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] w-[78%]"
                compId="150:294"
                comWidth={465}
                comHeight={26}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="cursor-pointer hover:font-medium font-medium lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-indigo_900 text-left w-[15%]"
                  compId="150:299"
                  comWidth={72}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Portfolio`}</Text>
                <Text
                  className="cursor-pointer hover:font-medium font-medium lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-indigo_900 text-left w-[24%]"
                  compId="150:298"
                  comWidth={111}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`How it Works`}</Text>
                <Text
                  className="cursor-pointer hover:font-medium font-medium lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-indigo_900 text-left w-[12%]"
                  compId="150:297"
                  comWidth={58}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Pricing`}</Text>
                <Text
                  className="cursor-pointer hover:font-medium font-medium lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-indigo_900 text-left w-[11%]"
                  compId="150:296"
                  comWidth={53}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`About`}</Text>
                <Text
                  className="cursor-pointer hover:font-medium font-medium lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-indigo_900 text-left w-[10%]"
                  compId="150:295"
                  comWidth={45}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Login`}</Text>
              </Row>
              <Button
                className="border-2 border-gray_200 border-solid font-medium xl:py-[10px] py-[11px] 3xl:py-[13px] lg:py-[8px] rounded-radius100 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-indigo_900 w-[17%]"
                compId="150:293"
                comWidth={100}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="Button"
              >{`Sign In`}</Button>
            </Row>
          </Row>
        </header>
        <Column
          className="items-center justify-start 3xl:mt-[103px] lg:mt-[67px] xl:mt-[76px] mt-[84px] 2xl:mt-[86px] mx-[auto] w-[80%]"
          compId="150:255"
          comWidth={1114}
          comHeight={1066.5}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Column
            className="items-center justify-start mx-[auto] w-[84%]"
            compId="403:33"
            comWidth={940}
            comHeight={868}
            compLeft={10}
            compRight={10}
            compType="Column"
          >
            <Text
              className="font-bold lg:leading-lh56 xl:leading-lh64 leading-lh7000 2xl:leading-lh72 3xl:leading-lh86 mx-[auto] text-center lg:text-fs46 xl:text-fs53 text-fs58 2xl:text-fs59 3xl:text-fs71 text-indigo_900 tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 w-[89%]"
              compId="150:291"
              comWidth={839}
              comHeight={140}
              compLeft={10}
              compRight={10}
              compType="Text"
            >
              {apiData?.message}
            </Text>
            <Button
              className="common-pointer bg-teal_A400 font-medium lg:mt-[43px] xl:mt-[49px] mt-[54px] 2xl:mt-[55px] 3xl:mt-[66px] mx-[auto] lg:py-[16px] xl:py-[18px] py-[20px] 3xl:py-[24px] rounded-radius100 text-center lg:text-fs16 xl:text-fs18 text-fs20 3xl:text-fs24 text-white_A700 w-[18%]"
              compId="150:289"
              comWidth={170}
              comHeight={60}
              compLeft={10}
              compRight={10}
              compType="Button"
              onClick={callApi}
            >{`Get Started`}</Button>
            <Stack
              className="lg:h-[433px] xl:h-[496px] h-[541px] 2xl:h-[557px] 3xl:h-[669px] lg:mt-[58px] xl:mt-[66px] mt-[73px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
              compId="58"
              comWidth={940}
              comHeight={541}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_macbookpro.png"}
                className="absolute lg:h-[433px] xl:h-[496px] h-[541px] 2xl:h-[557px] 3xl:h-[669px] inset-[0] object-cover w-[100%]"
                compId="150:264"
                comWidth={940}
                comHeight={541}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="MacBookPro"
              />
              <Stack
                className="absolute lg:h-[408px] xl:h-[467px] h-[509.91px] 2xl:h-[525px] 3xl:h-[630px] inset-x-[0] mx-[auto] top-[0] w-[81%]"
                compId="60"
                comWidth={761.84}
                comHeight={509.91}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_line.svg"}
                  className="absolute lg:h-[408px] xl:h-[467px] h-[509.91px] 2xl:h-[525px] 3xl:h-[630px] inset-[0] object-cover w-[100%]"
                  compId="150:265"
                  comWidth={761.84}
                  comHeight={509.91}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Line"
                />
                <Column
                  className="absolute bottom-[1%] inset-x-[0] items-center justify-start mx-[auto] w-[95%]"
                  compId="50"
                  comWidth={726}
                  comHeight={481.15}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_screen.png"}
                    className="lg:h-[366px] xl:h-[419px] h-[457px] 2xl:h-[471px] 3xl:h-[565px] object-cover w-[100%]"
                    compId="150:288"
                    comWidth={726}
                    comHeight={457}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Screen"
                  />
                  <Image
                    src={"images/img_macbookprocop.svg"}
                    className="3xl:h-[10px] lg:h-[6px] h-[7.4px] xl:h-[7px] 2xl:h-[8px] lg:mt-[13px] xl:mt-[15px] mt-[16.75px] 2xl:mt-[17px] 3xl:mt-[20px] mx-[auto] object-contain w-[8%]"
                    compId="150:270"
                    comWidth={57.28}
                    comHeight={7.4}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="MacBookProCop"
                  />
                </Column>
              </Stack>
            </Stack>
          </Column>
          <Row
            className="items-start justify-between lg:mt-[52px] xl:mt-[59px] mt-[65px] 2xl:mt-[66px] 3xl:mt-[80px] w-[100%]"
            compId="16"
            comWidth={1114}
            comHeight={133.5}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-medium lg:leading-lh22 xl:leading-lh25 2xl:leading-lh28 leading-lh2800 3xl:leading-lh34 lg:mb-[25px] xl:mb-[28px] mb-[31.3px] 2xl:mb-[32px] 3xl:mb-[38px] lg:mt-[14px] xl:mt-[16px] mt-[18.2px] 2xl:mt-[18px] 3xl:mt-[22px] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-gray_900_66 w-[28%]"
              compId="150:261"
              comWidth={315}
              comHeight={84}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Startup Framework works on devices supporting Retina Display. Feel the clarity in each pixel.`}</Text>
            <Line
              className="bg-gray_900 lg:h-[101px] xl:h-[116px] h-[126px] 2xl:h-[130px] 3xl:h-[156px] xl:mt-[6px] lg:mt-[6px] mt-[7.5px] 2xl:mt-[7px] 3xl:mt-[9px] opacity-op3 w-[2px]"
              compId="150:260"
              comWidth={2}
              comHeight={126}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
            <Text
              className="font-medium lg:leading-lh22 xl:leading-lh25 2xl:leading-lh28 leading-lh2800 3xl:leading-lh34 lg:mb-[2px] mb-[3.3px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] lg:mt-[14px] xl:mt-[16px] mt-[18.2px] 2xl:mt-[18px] 3xl:mt-[22px] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-gray_900_66 w-[28%]"
              compId="150:259"
              comWidth={315}
              comHeight={112}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`There are a lot of different components that will help you create the perfect look and feel for your startup.`}</Text>
            <Line
              className="bg-gray_900 lg:h-[101px] xl:h-[116px] h-[126px] 2xl:h-[130px] 3xl:h-[156px] xl:mb-[6px] lg:mb-[6px] mb-[7.5px] 2xl:mb-[7px] 3xl:mb-[9px] opacity-op3 w-[2px]"
              compId="150:258"
              comWidth={2}
              comHeight={126}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
            <Text
              className="font-medium lg:leading-lh22 xl:leading-lh25 2xl:leading-lh28 leading-lh2800 3xl:leading-lh34 lg:mb-[25px] xl:mb-[28px] mb-[31.3px] 2xl:mb-[32px] 3xl:mb-[38px] lg:mt-[14px] xl:mt-[16px] mt-[18.2px] 2xl:mt-[18px] 3xl:mt-[22px] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-gray_900_66 w-[28%]"
              compId="150:257"
              comWidth={315}
              comHeight={84}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`You can easily combine components in a variety ways for different design projects. It’s easy!`}</Text>
          </Row>
        </Column>
        <Row
          className="items-center justify-between lg:mt-[123px] xl:mt-[141px] mt-[154.5px] 2xl:mt-[159px] 3xl:mt-[190px] mx-[auto] w-[84%]"
          compId="150:301"
          comWidth={1170}
          comHeight={620}
          compLeft={10}
          compRight={10}
          compType="Row"
        >
          <Image
            src={"images/img_rectangle.png"}
            className="lg:h-[496px] xl:h-[568px] h-[620px] 2xl:h-[639px] 3xl:h-[766px] object-contain rounded-radius10 w-[40%]"
            compId="150:315"
            comWidth={470}
            comHeight={620}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="Rectangle"
          />
          <Column
            className="lg:mb-[39px] xl:mb-[44px] mb-[48.8px] 2xl:mb-[50px] 3xl:mb-[60px] lg:mt-[37px] xl:mt-[43px] mt-[47px] 2xl:mt-[48px] 3xl:mt-[58px] w-[49%]"
            compId="177:29"
            comWidth={572}
            comHeight={524.2}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-start justify-start w-[100%]"
              compId="51"
              comWidth={572}
              comHeight={284}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold xl:ml-[1px] lg:ml-[1px] ml-[2px] mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:text-fs46 xl:text-fs53 text-fs58 2xl:text-fs59 3xl:text-fs71 text-indigo_900 text-left tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 w-[78%]"
                compId="150:314"
                comWidth={445}
                comHeight={70}
                compLeft={2}
                compRight={10}
                compType="Text"
              >{`Fast Prototyping`}</Text>
              <Text
                className="font-medium lg:leading-lh25 xl:leading-lh29 2xl:leading-lh32 leading-lh3200 3xl:leading-lh39 xl:ml-[1px] lg:ml-[1px] ml-[2px] mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[33px] opacity-op7 lg:text-fs17 xl:text-fs20 text-fs22 3xl:text-fs27 text-gray_900_66 text-left w-[87%]"
                compId="150:313"
                comWidth={500}
                comHeight={128}
                compLeft={2}
                compRight={10}
                compType="Text"
              >{`Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.`}</Text>
              <Row
                className="items-center justify-start ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:mt-[24px] xl:mt-[28px] mt-[31px] 3xl:mt-[38px] w-[59%]"
                compId="150:310"
                comWidth={335}
                comHeight={28}
                compLeft={1}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-medium lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-left text-pink_400 w-[95%]"
                  compId="150:311"
                  comWidth={319}
                  comHeight={28}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Learn more about Startup Framework`}</Text>
                <Image
                  src={"images/img_faangleright.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[23px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9px] xl:my-[4px] lg:my-[4px] my-[5px] 3xl:my-[6px] object-contain w-[2%]"
                  compId="150:312"
                  comWidth={7}
                  comHeight={18}
                  compLeft={9}
                  compRight={0}
                  compType="Image"
                  alt="faangleright"
                />
              </Row>
            </Column>
            <Row
              className="items-center justify-between xl:mt-[109px] mt-[119.2px] 2xl:mt-[122px] 3xl:mt-[147px] lg:mt-[95px] w-[100%]"
              compId="150:302"
              comWidth={572}
              comHeight={121}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start w-[47%]"
                compId="150:306"
                comWidth={267}
                comHeight={121}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:text-fs11 xl:text-fs12 text-fs14 3xl:text-fs17 text-indigo_900 text-left xl:tracking-ls11 lg:tracking-ls11 tracking-ls21 uppercase w-[78%]"
                  compId="150:308"
                  comWidth={207}
                  comHeight={26}
                  compLeft={1}
                  compRight={10}
                  compType="Text"
                >{`Based on Bootstrap 3`}</Text>
                <Text
                  className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[100%]"
                  compId="150:307"
                  comWidth={267}
                  comHeight={78}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`HTML layout is based on one of the most common and reliable framework - Bootstrap.`}</Text>
              </Column>
              <Column
                className="items-start mb-[1px] w-[39%]"
                compId="150:303"
                comWidth={222}
                comHeight={120.8}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:text-fs11 xl:text-fs12 text-fs14 3xl:text-fs17 text-indigo_900 text-left xl:tracking-ls11 lg:tracking-ls11 tracking-ls21 uppercase w-[56%]"
                  compId="150:305"
                  comWidth={124}
                  comHeight={26}
                  compLeft={1}
                  compRight={10}
                  compType="Text"
                >{`HTML5 & CSS3`}</Text>
                <Text
                  className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 lg:mt-[13px] xl:mt-[15px] mt-[16.8px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[100%]"
                  compId="150:304"
                  comWidth={222}
                  comHeight={78}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`We used only time-tested technologies for the best results.`}</Text>
              </Column>
            </Row>
          </Column>
        </Row>
        <Stack
          className="lg:h-[484px] xl:h-[554px] h-[605px] 2xl:h-[623px] 3xl:h-[748px] lg:mt-[106px] xl:mt-[121px] mt-[133px] 2xl:mt-[136px] 3xl:mt-[164px] w-[100%]"
          compId="62"
          comWidth={1400}
          comHeight={605}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Image
            src={"images/img_background.png"}
            className="absolute lg:h-[484px] xl:h-[554px] h-[605px] 2xl:h-[623px] 3xl:h-[748px] inset-[0] object-cover opacity-op7 w-[100%]"
            compId="150:318"
            comWidth={1400}
            comHeight={605}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="Background"
          />
          <Column
            className="absolute bg-black_900_d8 inset-[0] items-center justify-center py-[100px] 2xl:py-[102px] 3xl:py-[123px] lg:py-[80px] xl:py-[91px] w-[100%]"
            compId="207:29"
            comWidth={1400}
            comHeight={605}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-center justify-start mx-[auto] w-[55%]"
              compId="150:323"
              comWidth={770}
              comHeight={277}
              compLeft={10}
              compRight={10}
              compType="Column"
            >
              <Text
                className="font-bold lg:leading-lh56 xl:leading-lh64 leading-lh7000 2xl:leading-lh72 3xl:leading-lh86 text-center lg:text-fs46 xl:text-fs53 text-fs58 2xl:text-fs59 3xl:text-fs71 text-white_A700 tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 w-[100%]"
                compId="150:325"
                comWidth={770}
                comHeight={161}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                {
                  <>
                    {`Easy to setup.`}
                    <br />
                    {`Easy to maintain`}
                  </>
                }
              </Text>
              <Text
                className="font-medium lg:leading-lh25 xl:leading-lh29 2xl:leading-lh32 leading-lh3200 3xl:leading-lh39 lg:mt-[16px] xl:mt-[18px] mt-[20px] 3xl:mt-[24px] mx-[auto] text-center lg:text-fs17 xl:text-fs20 text-fs22 3xl:text-fs27 text-white_A700 w-[67%]"
                compId="150:324"
                comWidth={518}
                comHeight={96}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web development.`}</Text>
            </Column>
            <Row
              className="items-center justify-center lg:mt-[46px] xl:mt-[53px] mt-[58px] 2xl:mt-[59px] 3xl:mt-[71px] mx-[auto] w-[22%]"
              compId="150:320"
              comWidth={313}
              comHeight={70}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Image
                src={"images/img_iconfill.svg"}
                className="lg:h-[56px] xl:h-[65px] h-[70px] 2xl:h-[73px] 3xl:h-[87px] object-contain lg:w-[56px] xl:w-[64px] w-[70px] 2xl:w-[72px] 3xl:w-[86px]"
                compId="150:322"
                comWidth={70}
                comHeight={70}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="IconFill"
              />
              <Button
                className="bg-teal_A400 font-medium lg:ml-[24px] xl:ml-[27px] ml-[30px] 3xl:ml-[37px] lg:py-[20px] xl:py-[22px] py-[25px] 3xl:py-[30px] rounded-radius100 text-center lg:text-fs16 xl:text-fs18 text-fs20 3xl:text-fs24 text-white_A700 w-[68%]"
                compId="150:321"
                comWidth={213}
                comHeight={70}
                compLeft={30}
                compRight={0}
                compType="Button"
              >{`Get Started`}</Button>
            </Row>
          </Column>
        </Stack>
        <Column
          className="lg:mt-[106px] xl:mt-[121px] mt-[133px] 2xl:mt-[136px] 3xl:mt-[164px] mx-[auto] w-[84%]"
          compId="150:361"
          comWidth={1170}
          comHeight={814}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Row
            className="items-center justify-between w-[100%]"
            compId="150:391"
            comWidth={1170}
            comHeight={52}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-bold lg:text-fs33 xl:text-fs38 text-fs42 2xl:text-fs43 3xl:text-fs51 text-indigo_900 text-left tracking-ls1 w-[18%]"
              compId="150:393"
              comWidth={213}
              comHeight={52}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`Last works`}</Text>
            <Button
              className="border-2 border-gray_200 border-solid font-medium my-[1px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius100 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-indigo_900 w-[18%]"
              compId="150:392"
              comWidth={214}
              comHeight={50}
              compLeft={0}
              compRight={0}
              compType="Button"
            >{`Explore Showcase`}</Button>
          </Row>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[33px] xl:mt-[38px] mt-[42px] 2xl:mt-[43px] 3xl:mt-[51px] w-[100%]"
            compId="20"
            comWidth={1170}
            comHeight={720}
            compLeft={0}
            compRight={0}
            compType="List"
            orientation="vertical"
          >
            <Row
              className="lg:gap-[24px] xl:gap-[27px] gap-[30px] 3xl:gap-[37px] grid grid-cols-2 items-center justify-between lg:my-[12px] xl:my-[13px] my-[15px] 3xl:my-[18px] w-[100%]"
              compId="18"
              comWidth={1170}
              comHeight={340}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Stack
                className="lg:h-[272px] xl:h-[312px] h-[340px] 2xl:h-[350px] 3xl:h-[420px] w-[100%]"
                compId="64"
                comWidth={570}
                comHeight={340}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder.svg"}
                  className="absolute lg:h-[272px] xl:h-[312px] h-[340px] 2xl:h-[350px] 3xl:h-[420px] inset-[0] object-cover w-[100%]"
                  compId="150:378"
                  comWidth={570}
                  comHeight={340}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Placeholder"
                />
                <Column
                  className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[4%] w-[83%]"
                  compId="54"
                  comWidth={474}
                  comHeight={235}
                  compLeft={0}
                  compRight={25}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="78"
                    comWidth={474}
                    comHeight={126}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="justify-start w-[100%]"
                      compId="53"
                      comWidth={474}
                      comHeight={126}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:text-fs17 xl:text-fs20 text-fs22 3xl:text-fs27 text-indigo_900 text-left w-[42%]"
                        compId="150:382"
                        comWidth={200}
                        comHeight={32}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Startup Framework`}</Text>
                      <Text
                        className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[98%]"
                        compId="150:381"
                        comWidth={465}
                        comHeight={78}
                        compLeft={9}
                        compRight={0}
                        compType="Text"
                      >{`Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.`}</Text>
                    </Column>
                  </Column>
                  <Button
                    className="bg-white_A700 font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:mt-[55px] xl:mt-[63px] mt-[69px] 2xl:mt-[71px] 3xl:mt-[85px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 w-[22%]"
                    compId="150:383"
                    comWidth={105}
                    comHeight={40}
                    compLeft={0}
                    compRight={10}
                    compType="Button"
                  >{`Explore`}</Button>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[272px] xl:h-[312px] h-[340px] 2xl:h-[350px] 3xl:h-[420px] w-[100%]"
                compId="66"
                comWidth={570}
                comHeight={340}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_1.svg"}
                  className="absolute lg:h-[272px] xl:h-[312px] h-[340px] 2xl:h-[350px] 3xl:h-[420px] inset-[0] object-cover w-[100%]"
                  compId="150:385"
                  comWidth={570}
                  comHeight={340}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Placeholder"
                />
                <Column
                  className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[6%] w-[82%]"
                  compId="150:387"
                  comWidth={465}
                  comHeight={235}
                  compLeft={0}
                  compRight={36}
                  compType="Column"
                >
                  <Text
                    className="font-medium xl:ml-[1px] lg:ml-[1px] ml-[2px] mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:text-fs17 xl:text-fs20 text-fs22 3xl:text-fs27 text-indigo_900 text-left w-[34%]"
                    compId="150:389"
                    comWidth={160}
                    comHeight={32}
                    compLeft={2}
                    compRight={10}
                    compType="Text"
                  >{`Web Generator`}</Text>
                  <Text
                    className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[100%]"
                    compId="150:388"
                    comWidth={465}
                    comHeight={78}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.`}</Text>
                  <Button
                    className="bg-teal_A400 font-medium xl:ml-[1px] lg:ml-[1px] ml-[2px] mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:mt-[55px] xl:mt-[63px] mt-[69px] 2xl:mt-[71px] 3xl:mt-[85px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 w-[23%]"
                    compId="150:390"
                    comWidth={105}
                    comHeight={40}
                    compLeft={2}
                    compRight={10}
                    compType="Button"
                  >{`Explore`}</Button>
                </Column>
              </Stack>
            </Row>
            <Row
              className="lg:gap-[24px] xl:gap-[27px] gap-[30px] 3xl:gap-[37px] grid grid-cols-2 items-center justify-between lg:my-[12px] xl:my-[13px] my-[15px] 3xl:my-[18px] w-[100%]"
              compId="19"
              comWidth={1170}
              comHeight={350}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Stack
                className="lg:h-[280px] xl:h-[321px] h-[350px] 2xl:h-[361px] 3xl:h-[433px] w-[100%]"
                compId="68"
                comWidth={570}
                comHeight={350}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_2.svg"}
                  className="absolute lg:h-[280px] xl:h-[321px] h-[350px] 2xl:h-[361px] 3xl:h-[433px] inset-[0] object-cover w-[100%]"
                  compId="150:371"
                  comWidth={570}
                  comHeight={350}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Placeholder"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[73%]"
                  compId="56"
                  comWidth={418}
                  comHeight={245}
                  compLeft={70}
                  compRight={82}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="79"
                    comWidth={418}
                    comHeight={152}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="justify-start w-[100%]"
                      compId="55"
                      comWidth={418}
                      comHeight={152}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-medium ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:text-fs17 xl:text-fs20 text-fs22 3xl:text-fs27 text-left text-white_A700 w-[20%]"
                        compId="150:375"
                        comWidth={82}
                        comHeight={32}
                        compLeft={1}
                        compRight={10}
                        compType="Text"
                      >{`Slides 4`}</Text>
                      <Text
                        className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 w-[98%]"
                        compId="150:374"
                        comWidth={408}
                        comHeight={104}
                        compLeft={10}
                        compRight={0}
                        compType="Text"
                      >{`All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.`}</Text>
                    </Column>
                  </Column>
                  <Button
                    className="bg-white_A700 font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:mt-[42px] xl:mt-[48px] mt-[53px] 2xl:mt-[54px] 3xl:mt-[65px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 w-[25%]"
                    compId="150:376"
                    comWidth={105}
                    comHeight={40}
                    compLeft={0}
                    compRight={10}
                    compType="Button"
                  >{`Explore`}</Button>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[280px] xl:h-[321px] h-[350px] 2xl:h-[361px] 3xl:h-[433px] w-[100%]"
                compId="70"
                comWidth={570}
                comHeight={350}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_image.png"}
                  className="absolute lg:h-[280px] xl:h-[321px] h-[350px] 2xl:h-[361px] 3xl:h-[433px] inset-[0] object-cover rounded-radius10 w-[100%]"
                  compId="150:365"
                  comWidth={570}
                  comHeight={350}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Image"
                />
                <Column
                  className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[12%] my-[auto] w-[72%]"
                  compId="150:366"
                  comWidth={408}
                  comHeight={244}
                  compLeft={69}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-medium ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:text-fs17 xl:text-fs20 text-fs22 3xl:text-fs27 text-left text-white_A700 w-[25%]"
                    compId="150:368"
                    comWidth={104}
                    comHeight={32}
                    compLeft={1}
                    compRight={10}
                    compType="Text"
                  >{`Postcards`}</Text>
                  <Text
                    className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 lg:mt-[11px] xl:mt-[12px] mt-[14px] 3xl:mt-[17px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 w-[100%]"
                    compId="150:367"
                    comWidth={408}
                    comHeight={104}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.`}</Text>
                  <Button
                    className="bg-white_A700 font-medium ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:mt-[43px] xl:mt-[49px] mt-[54px] 2xl:mt-[55px] 3xl:mt-[66px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius100 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 w-[26%]"
                    compId="150:369"
                    comWidth={105}
                    comHeight={40}
                    compLeft={1}
                    compRight={10}
                    compType="Button"
                  >{`Explore`}</Button>
                </Column>
              </Stack>
            </Row>
          </List>
        </Column>
        <Row
          className="items-start justify-start xl:mt-[113px] mt-[124px] 2xl:mt-[127px] 3xl:mt-[153px] lg:mt-[99px] mx-[auto] w-[84%]"
          compId="150:533"
          comWidth={1178}
          comHeight={957.8}
          compLeft={10}
          compRight={10}
          compType="Row"
        >
          <Column
            className="items-start justify-start w-[59%]"
            compId="150:421"
            comWidth={700}
            comHeight={957.8}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:leading-lh41 xl:leading-lh47 leading-lh5200 2xl:leading-lh53 3xl:leading-lh64 lg:text-fs33 xl:text-fs38 text-fs42 2xl:text-fs43 3xl:text-fs51 text-indigo_900 text-left tracking-ls1 w-[100%]"
              compId="150:429"
              comWidth={700}
              comHeight={104}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`To these in the morning I sent the lead who was to enter the hole`}</Text>
            <Text
              className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-fs11 xl:text-fs12 text-fs14 3xl:text-fs17 text-gray_900_66 text-left xl:tracking-ls11 lg:tracking-ls11 tracking-ls21 uppercase w-[17%]"
              compId="150:428"
              comWidth={118}
              comHeight={26}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`20 December`}</Text>
            <Text
              className="font-medium lg:leading-lh22 xl:leading-lh25 2xl:leading-lh28 leading-lh2800 3xl:leading-lh34 lg:mt-[23px] xl:mt-[27px] mt-[29.8px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-indigo_900 text-left w-[100%]"
              compId="150:427"
              comWidth={700}
              comHeight={84}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.`}</Text>
            <Text
              className="font-medium lg:leading-lh22 xl:leading-lh25 2xl:leading-lh28 leading-lh2800 3xl:leading-lh34 lg:mt-[27px] xl:mt-[31px] mt-[34px] 3xl:mt-[41px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-indigo_900 text-left w-[100%]"
              compId="150:426"
              comWidth={700}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`For some minutes Alice stood without speaking, looking out in all directions over the country - and a most curious country it was.`}</Text>
            <Text
              className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:mt-[28px] xl:mt-[33px] mt-[36.2px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-fs17 xl:text-fs20 text-fs22 3xl:text-fs27 text-indigo_900 text-left w-[23%]"
              compId="150:425"
              comWidth={161}
              comHeight={32}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Perfect for Your`}</Text>
            <Text
              className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 lg:mt-[10px] xl:mt-[12px] mt-[13.6px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[100%]"
              compId="150:424"
              comWidth={700}
              comHeight={78}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`The method is this: in an acre of ground you bury, at six inches distance and eight deep, a quantity of acorns, dates, chestnuts, and other mast or vegetables, whereof these animals are fondest  then you drive.`}</Text>
            <Column
              className="lg:mt-[41px] xl:mt-[47px] mt-[52.2px] 2xl:mt-[53px] 3xl:mt-[64px] w-[100%]"
              compId="80"
              comWidth={700}
              comHeight={400}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_mask.png"}
                className="lg:h-[320px] xl:h-[366px] h-[400px] 2xl:h-[412px] 3xl:h-[494px] object-cover rounded-radius10 w-[100%]"
                compId="150:423"
                comWidth={700}
                comHeight={400}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Mask"
              />
            </Column>
          </Column>
          <Column
            className="items-start justify-start lg:mb-[208px] xl:mb-[238px] mb-[261.2px] 2xl:mb-[268px] 3xl:mb-[322px] ml-[100px] 2xl:ml-[102px] 3xl:ml-[123px] lg:ml-[80px] xl:ml-[91px] xl:mt-[2px] lg:mt-[2px] mt-[3px] w-[32%]"
            compId="150:394"
            comWidth={378}
            comHeight={693.6}
            compLeft={100}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:text-fs11 xl:text-fs12 text-fs14 3xl:text-fs17 text-gray_900_66 text-left xl:tracking-ls11 lg:tracking-ls11 tracking-ls21 uppercase w-[24%]"
              compId="150:420"
              comWidth={90}
              comHeight={26}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`Last Seen`}</Text>
            <Column
              className="lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[22px] w-[100%]"
              compId="81"
              comWidth={378}
              comHeight={649.6001}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                compId="77"
                comWidth={378}
                comHeight={649.6001}
                compLeft={0}
                compRight={0}
                compType="List"
                orientation="vertical"
              >
                <Row
                  className="items-start justify-between lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:my-[10px] xl:my-[11px] my-[12.700001px] 2xl:my-[13px] 3xl:my-[15px] w-[98%]"
                  compId="21"
                  comWidth={370}
                  comHeight={109.6}
                  compLeft={0}
                  compRight={8}
                  compType="Row"
                >
                  <Image
                    src={"images/img_mask_1.png"}
                    className="h-[105px] 2xl:h-[109px] 3xl:h-[130px] lg:h-[84px] xl:h-[97px] lg:mb-[3px] mb-[4.6px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] object-contain rounded-radius10 w-[46%]"
                    compId="150:419"
                    comWidth={170}
                    comHeight={105}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Mask"
                  />
                  <Column
                    className="items-start justify-start xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[49%]"
                    compId="181:29"
                    comWidth={181}
                    comHeight={107.6}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[100%]"
                      compId="150:417"
                      comWidth={181}
                      comHeight={78}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`To these in the morning I sent the lead who was to...`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:mt-[2px] mt-[3.6px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[54%]"
                      compId="150:416"
                      comWidth={97}
                      comHeight={26}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`19 December`}</Text>
                  </Column>
                </Row>
                <Row
                  className="items-start justify-between lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:my-[10px] xl:my-[11px] my-[12.700001px] 2xl:my-[13px] 3xl:my-[15px] w-[98%]"
                  compId="22"
                  comWidth={370}
                  comHeight={109.6}
                  compLeft={0}
                  compRight={8}
                  compType="Row"
                >
                  <Image
                    src={"images/img_mask_2.png"}
                    className="h-[105px] 2xl:h-[109px] 3xl:h-[130px] lg:h-[84px] xl:h-[97px] lg:mb-[3px] mb-[4.6px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] object-contain rounded-radius10 w-[46%]"
                    compId="150:414"
                    comWidth={170}
                    comHeight={105}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Mask"
                  />
                  <Column
                    className="items-start justify-start xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[49%]"
                    compId="181:30"
                    comWidth={181}
                    comHeight={107.6}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[100%]"
                      compId="150:412"
                      comWidth={181}
                      comHeight={78}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`When the last 'natural' had been declared, and the profit...`}</Text>
                    <Text
                      className="font-normal xl:ml-[2px] lg:ml-[2px] ml-[3px] mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:mt-[2px] mt-[3.6px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[54%]"
                      compId="150:411"
                      comWidth={97}
                      comHeight={26}
                      compLeft={3}
                      compRight={10}
                      compType="Text"
                    >{`13 December`}</Text>
                  </Column>
                </Row>
                <Row
                  className="items-start justify-between lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:my-[10px] xl:my-[11px] my-[12.700001px] 2xl:my-[13px] 3xl:my-[15px] w-[98%]"
                  compId="23"
                  comWidth={370}
                  comHeight={109.6}
                  compLeft={0}
                  compRight={8}
                  compType="Row"
                >
                  <Image
                    src={"images/img_mask_3.png"}
                    className="h-[105px] 2xl:h-[109px] 3xl:h-[130px] lg:h-[84px] xl:h-[97px] lg:mb-[3px] mb-[4.6px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] object-contain rounded-radius10 w-[46%]"
                    compId="150:409"
                    comWidth={170}
                    comHeight={105}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Mask"
                  />
                  <Column
                    className="items-start justify-start xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[49%]"
                    compId="181:31"
                    comWidth={181}
                    comHeight={107.6}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[100%]"
                      compId="150:407"
                      comWidth={181}
                      comHeight={78}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Sam's attention that, when this person dismounted…`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:mt-[2px] mt-[3.6px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[53%]"
                      compId="150:406"
                      comWidth={96}
                      comHeight={26}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`21 December`}</Text>
                  </Column>
                </Row>
                <Row
                  className="items-start justify-between lg:my-[10px] xl:my-[11px] my-[12.700001px] 2xl:my-[13px] 3xl:my-[15px] w-[100%]"
                  compId="24"
                  comWidth={378}
                  comHeight={109.6}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_mask_4.png"}
                    className="h-[105px] 2xl:h-[109px] 3xl:h-[130px] lg:h-[84px] xl:h-[97px] lg:mb-[3px] mb-[4.6px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] object-contain rounded-radius10 w-[45%]"
                    compId="150:404"
                    comWidth={170}
                    comHeight={105}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Mask"
                  />
                  <Column
                    className="items-start justify-start xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[50%]"
                    compId="181:32"
                    comWidth={189}
                    comHeight={107.6}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[100%]"
                      compId="150:402"
                      comWidth={189}
                      comHeight={52}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`To these in the morning I sent the lead who was ...`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:mt-[23px] xl:mt-[27px] mt-[29.6px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[52%]"
                      compId="150:401"
                      comWidth={98}
                      comHeight={26}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`10 December`}</Text>
                  </Column>
                </Row>
                <Row
                  className="items-start justify-between lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:my-[10px] xl:my-[11px] my-[12.700001px] 2xl:my-[13px] 3xl:my-[15px] w-[98%]"
                  compId="25"
                  comWidth={370}
                  comHeight={109.6}
                  compLeft={0}
                  compRight={8}
                  compType="Row"
                >
                  <Image
                    src={"images/img_mask_5.png"}
                    className="h-[105px] 2xl:h-[109px] 3xl:h-[130px] lg:h-[84px] xl:h-[97px] lg:mb-[3px] mb-[4.6px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] object-contain rounded-radius10 w-[46%]"
                    compId="150:399"
                    comWidth={170}
                    comHeight={105}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Mask"
                  />
                  <Column
                    className="items-start justify-start xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[49%]"
                    compId="181:33"
                    comWidth={181}
                    comHeight={107.6}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[100%]"
                      compId="150:397"
                      comWidth={181}
                      comHeight={78}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`The tattered remains of a checked curtain were drawn round...`}</Text>
                    <Text
                      className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] lg:mt-[2px] mt-[3.6px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[53%]"
                      compId="150:396"
                      comWidth={96}
                      comHeight={26}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`12 December`}</Text>
                  </Column>
                </Row>
              </List>
            </Column>
          </Column>
        </Row>
        <Column
          className="items-center justify-start xl:mt-[111px] mt-[122.2px] 2xl:mt-[125px] 3xl:mt-[150px] lg:mt-[97px] mx-[auto] w-[83%]"
          compId="150:534"
          comWidth={1168}
          comHeight={780}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Column
            className="items-start justify-start mx-[auto] w-[52%]"
            compId="150:503"
            comWidth={610.5}
            comHeight={154}
            compLeft={10}
            compRight={10}
            compType="Column"
          >
            <Column
              className="w-[100%]"
              compId="82"
              comWidth={610.5}
              comHeight={104}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold lg:leading-lh41 xl:leading-lh47 leading-lh5200 2xl:leading-lh53 3xl:leading-lh64 text-center lg:text-fs33 xl:text-fs38 text-fs42 2xl:text-fs43 3xl:text-fs51 text-indigo_900 tracking-ls1 w-[100%]"
                compId="150:505"
                comWidth={610.5}
                comHeight={104}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Simple & flexible pricing built for everyone`}</Text>
            </Column>
            <Text
              className="font-normal lg:mt-[19px] xl:mt-[21px] mt-[24px] 3xl:mt-[29px] lg:mx-[26px] xl:mx-[30px] mx-[33.25px] 2xl:mx-[34px] 3xl:mx-[41px] not-italic text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 w-[84%]"
              compId="150:504"
              comWidth={511}
              comHeight={26}
              compLeft={33.25}
              compRight={33.25}
              compType="Text"
            >{`Start with 14-day free trial. No credit card needed. Cancel at anytime.`}</Text>
          </Column>
          <List
            className="lg:gap-[23px] xl:gap-[26px] gap-[29px] 3xl:gap-[35px] grid grid-cols-3 min-h-[auto] lg:mt-[51px] xl:mt-[58px] mt-[64px] 2xl:mt-[65px] 3xl:mt-[79px] w-[100%]"
            compId="190:34"
            comWidth={1168}
            comHeight={562}
            compLeft={0}
            compRight={0}
            compType="List"
            orientation="horizontal"
          >
            <Column
              className="items-center justify-start w-[100%]"
              compId="150:483"
              comWidth={370}
              comHeight={562}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Stack
                className="lg:h-[249px] xl:h-[285px] h-[311px] 2xl:h-[321px] 3xl:h-[385px] w-[100%]"
                compId="72"
                comWidth={370}
                comHeight={311}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_3.svg"}
                  className="absolute lg:h-[249px] xl:h-[285px] h-[311px] 2xl:h-[321px] 3xl:h-[385px] inset-[0] object-cover w-[100%]"
                  compId="150:493"
                  comWidth={370}
                  comHeight={311}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Placeholder"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[69%]"
                  compId="150:495"
                  comWidth={257}
                  comHeight={227}
                  compLeft={58}
                  compRight={55}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] text-center lg:text-fs11 xl:text-fs12 text-fs14 3xl:text-fs17 text-indigo_900 xl:tracking-ls11 lg:tracking-ls11 tracking-ls21 uppercase w-[21%]"
                    compId="150:502"
                    comWidth={53}
                    comHeight={26}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Start`}</Text>
                  <Row
                    className="items-start justify-start lg:mt-[19px] xl:mt-[21px] mt-[23.8px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]"
                    compId="26"
                    comWidth={257}
                    comHeight={70}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal lg:mb-[29px] xl:mb-[34px] mb-[37.4px] 2xl:mb-[38px] 3xl:mb-[46px] lg:ml-[20px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] lg:mt-[5px] mt-[6.6px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] not-italic text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 w-[4%]"
                      compId="150:501"
                      comWidth={10}
                      comHeight={26}
                      compLeft={25}
                      compRight={0}
                      compType="Text"
                    >{`$`}</Text>
                    <Text
                      className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] text-center lg:text-fs46 xl:text-fs53 text-fs58 2xl:text-fs59 3xl:text-fs71 text-indigo_900 tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 w-[21%]"
                      compId="150:500"
                      comWidth={55}
                      comHeight={70}
                      compLeft={16}
                      compRight={0}
                      compType="Text"
                    >{`19`}</Text>
                    <Column
                      className="items-start justify-start xl:mb-[4px] lg:mb-[4px] mb-[5.2px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[22px] xl:ml-[25px] ml-[28px] 3xl:ml-[34px] lg:mt-[10px] xl:mt-[12px] mt-[13.2px] 2xl:mt-[13px] 3xl:mt-[16px] w-[30%]"
                      compId="27"
                      comWidth={78}
                      comHeight={51.59961}
                      compLeft={28}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[79%]"
                        compId="150:498"
                        comWidth={62}
                        comHeight={25.8}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`per user`}</Text>
                      <Text
                        className="font-normal mb-[0] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[100%]"
                        compId="150:499"
                        comWidth={78}
                        comHeight={25.8}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`per month`}</Text>
                    </Column>
                  </Row>
                  <Text
                    className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 lg:mt-[23px] xl:mt-[26px] mt-[29.2px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 w-[100%]"
                    compId="150:496"
                    comWidth={257}
                    comHeight={78}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`All the features you need to keep your personal files safe, accessible, and easy to share.`}</Text>
                </Column>
              </Stack>
              <Column
                className="items-start justify-start lg:mt-[30px] xl:mt-[35px] mt-[38.4px] 2xl:mt-[39px] 3xl:mt-[47px] w-[100%]"
                compId="32"
                comWidth={370}
                comHeight={134}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="w-[100%]"
                  compId="83"
                  comWidth={370}
                  comHeight={61}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-center w-[100%]"
                    compId="28"
                    comWidth={370}
                    comHeight={26}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_checkicon.svg"}
                      className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] mb-[10.4px] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[8px] xl:mb-[9px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.6px] 2xl:mt-[8px] object-contain w-[3%]"
                      compId="150:490"
                      comWidth={12}
                      comHeight={7}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="CheckIcon"
                    />
                    <Text
                      className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[22px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[44%]"
                      compId="150:489"
                      comWidth={162}
                      comHeight={26}
                      compLeft={18}
                      compRight={0}
                      compType="Text"
                    >{`2 GB of hosting space`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-center 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]"
                    compId="29"
                    comWidth={370}
                    comHeight={26}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_checkicon.svg"}
                      className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] mb-[10.4px] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[8px] xl:mb-[9px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.6px] 2xl:mt-[8px] object-contain w-[3%]"
                      compId="150:491"
                      comWidth={12}
                      comHeight={7}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="CheckIcon"
                    />
                    <Text
                      className="font-normal lg:ml-[15px] xl:ml-[17px] ml-[19px] 3xl:ml-[23px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[47%]"
                      compId="150:488"
                      comWidth={174}
                      comHeight={26}
                      compLeft={19}
                      compRight={0}
                      compType="Text"
                    >{`14 days of free backups`}</Text>
                  </Row>
                </Column>
                <Text
                  className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] mx-[101px] 2xl:mx-[103px] 3xl:mx-[124px] lg:mx-[80px] xl:mx-[92px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_200 text-left w-[37%]"
                  compId="150:487"
                  comWidth={136}
                  comHeight={26}
                  compLeft={101}
                  compRight={101}
                  compType="Text"
                >{`Social integrations`}</Text>
                <Column
                  className="items-center xl:mt-[10px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]"
                  compId="84"
                  comWidth={370}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal mx-[auto] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_200 text-left w-[45%]"
                    compId="150:486"
                    comWidth={167}
                    comHeight={26}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Advanced client billing`}</Text>
                </Column>
              </Column>
              <Button
                className="border-2 border-gray_200 border-solid font-medium lg:mt-[22px] xl:mt-[26px] mt-[28.6px] 2xl:mt-[29px] 3xl:mt-[35px] mx-[auto] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius100 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-indigo_900 w-[54%]"
                compId="150:484"
                comWidth={200}
                comHeight={50}
                compLeft={10}
                compRight={10}
                compType="Button"
              >{`Start Free Trial`}</Button>
            </Column>
            <Column
              className="items-center justify-start w-[100%]"
              compId="150:462"
              comWidth={370}
              comHeight={562}
              compLeft={29}
              compRight={0}
              compType="Column"
            >
              <Stack
                className="lg:h-[249px] xl:h-[285px] h-[311px] 2xl:h-[321px] 3xl:h-[385px] w-[100%]"
                compId="74"
                comWidth={370}
                comHeight={311}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_4.svg"}
                  className="absolute lg:h-[249px] xl:h-[285px] h-[311px] 2xl:h-[321px] 3xl:h-[385px] inset-[0] object-cover w-[100%]"
                  compId="150:473"
                  comWidth={370}
                  comHeight={311}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Placeholder"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[65%]"
                  compId="150:475"
                  comWidth={239}
                  comHeight={227}
                  compLeft={67}
                  compRight={64}
                  compType="Column"
                >
                  <Text
                    className="font-bold mx-[auto] text-center lg:text-fs11 xl:text-fs12 text-fs14 3xl:text-fs17 text-white_A700 xl:tracking-ls11 lg:tracking-ls11 tracking-ls21 uppercase w-[42%]"
                    compId="150:482"
                    comWidth={101}
                    comHeight={26}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Enterprise`}</Text>
                  <Row
                    className="items-start justify-start lg:mt-[19px] xl:mt-[21px] mt-[23.8px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]"
                    compId="33"
                    comWidth={239}
                    comHeight={70}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal lg:mb-[29px] xl:mb-[34px] mb-[37.4px] 2xl:mb-[38px] 3xl:mb-[46px] lg:ml-[16px] xl:ml-[19px] ml-[21px] 3xl:ml-[25px] lg:mt-[5px] mt-[6.6px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 w-[4%]"
                      compId="150:481"
                      comWidth={10}
                      comHeight={26}
                      compLeft={21}
                      compRight={0}
                      compType="Text"
                    >{`$`}</Text>
                    <Text
                      className="font-bold xl:ml-[4px] lg:ml-[4px] ml-[5px] 3xl:ml-[6px] text-center lg:text-fs46 xl:text-fs53 text-fs58 2xl:text-fs59 3xl:text-fs71 text-white_A700 tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 w-[30%]"
                      compId="150:480"
                      comWidth={72}
                      comHeight={70}
                      compLeft={5}
                      compRight={0}
                      compType="Text"
                    >{`49`}</Text>
                    <Column
                      className="items-start justify-start lg:mb-[3px] mb-[4.8px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:ml-[15px] xl:ml-[17px] ml-[19.5px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[10px] xl:mt-[12px] mt-[13.6px] 2xl:mt-[13px] 3xl:mt-[16px] w-[33%]"
                      compId="34"
                      comWidth={78}
                      comHeight={51.600098}
                      compLeft={19.5}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 w-[79%]"
                        compId="150:478"
                        comWidth={62}
                        comHeight={25.8}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`per user`}</Text>
                      <Text
                        className="font-normal mt-[0] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 w-[100%]"
                        compId="150:479"
                        comWidth={78}
                        comHeight={25.8}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`per month`}</Text>
                    </Column>
                  </Row>
                  <Text
                    className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 lg:mt-[23px] xl:mt-[26px] mt-[29.2px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 w-[100%]"
                    compId="150:476"
                    comWidth={239}
                    comHeight={78}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`All the features you need to keep your personal files safe, accessible, and easy to share.`}</Text>
                </Column>
              </Stack>
              <Column
                className="items-center justify-start lg:mt-[30px] xl:mt-[34px] mt-[38px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]"
                compId="40"
                comWidth={370}
                comHeight={134}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-center w-[100%]"
                  compId="35"
                  comWidth={370}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkicon.svg"}
                    className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] mb-[10.4px] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[8px] xl:mb-[9px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.6px] 2xl:mt-[8px] object-contain w-[3%]"
                    compId="150:469"
                    comWidth={12}
                    comHeight={7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="CheckIcon"
                  />
                  <Text
                    className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[22px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[44%]"
                    compId="150:468"
                    comWidth={162}
                    comHeight={26}
                    compLeft={18}
                    compRight={0}
                    compType="Text"
                  >{`2 GB of hosting space`}</Text>
                </Row>
                <Row
                  className="items-center justify-center 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]"
                  compId="36"
                  comWidth={370}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkicon.svg"}
                    className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] xl:mb-[10px] mb-[11px] 3xl:mb-[13px] lg:mb-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] object-contain w-[3%]"
                    compId="150:470"
                    comWidth={12}
                    comHeight={7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="CheckIcon"
                  />
                  <Text
                    className="font-normal lg:ml-[15px] xl:ml-[17px] ml-[19px] 3xl:ml-[23px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[47%]"
                    compId="150:467"
                    comWidth={174}
                    comHeight={26}
                    compLeft={19}
                    compRight={0}
                    compType="Text"
                  >{`14 days of free backups`}</Text>
                </Row>
                <Row
                  className="items-center justify-center mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] w-[100%]"
                  compId="37"
                  comWidth={370}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkicon.svg"}
                    className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] object-contain w-[3%]"
                    compId="150:471"
                    comWidth={12}
                    comHeight={7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="CheckIcon"
                  />
                  <Text
                    className="font-normal lg:ml-[15px] xl:ml-[17px] ml-[19px] 3xl:ml-[23px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[37%]"
                    compId="150:466"
                    comWidth={136}
                    comHeight={26}
                    compLeft={19}
                    compRight={0}
                    compType="Text"
                  >{`Social integrations`}</Text>
                </Row>
                <Text
                  className="font-normal xl:mt-[10px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] mx-[auto] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_200 text-left w-[45%]"
                  compId="150:465"
                  comWidth={167}
                  comHeight={26}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`Advanced client billing`}</Text>
              </Column>
              <Button
                className="bg-teal_A400 font-medium lg:mt-[23px] xl:mt-[26px] mt-[29px] 3xl:mt-[35px] mx-[auto] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius100 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-white_A700 w-[54%]"
                compId="150:463"
                comWidth={200}
                comHeight={50}
                compLeft={10}
                compRight={10}
                compType="Button"
              >{`Start Free Trial`}</Button>
            </Column>
            <Column
              className="items-center justify-start w-[100%]"
              compId="150:440"
              comWidth={370}
              comHeight={562}
              compLeft={29}
              compRight={0}
              compType="Column"
            >
              <Stack
                className="lg:h-[249px] xl:h-[285px] h-[311px] 2xl:h-[321px] 3xl:h-[385px] w-[100%]"
                compId="76"
                comWidth={370}
                comHeight={311}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_placeholder_3.svg"}
                  className="absolute lg:h-[249px] xl:h-[285px] h-[311px] 2xl:h-[321px] 3xl:h-[385px] inset-[0] object-cover w-[100%]"
                  compId="150:452"
                  comWidth={370}
                  comHeight={311}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Placeholder"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[67%]"
                  compId="150:454"
                  comWidth={248}
                  comHeight={227}
                  compLeft={66}
                  compRight={56}
                  compType="Column"
                >
                  <Column
                    className="items-start w-[100%]"
                    compId="85"
                    comWidth={248}
                    comHeight={26}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold lg:mx-[54px] xl:mx-[62px] mx-[68.5px] 2xl:mx-[70px] 3xl:mx-[84px] text-center lg:text-fs11 xl:text-fs12 text-fs14 3xl:text-fs17 text-indigo_900 xl:tracking-ls11 lg:tracking-ls11 tracking-ls21 uppercase w-[41%]"
                      compId="150:461"
                      comWidth={101}
                      comHeight={26}
                      compLeft={68.5}
                      compRight={68.5}
                      compType="Text"
                    >{`Enterprise`}</Text>
                  </Column>
                  <Row
                    className="items-start justify-start lg:mt-[19px] xl:mt-[21px] mt-[23.8px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]"
                    compId="41"
                    comWidth={248}
                    comHeight={70}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal lg:mb-[29px] xl:mb-[34px] mb-[37.4px] 2xl:mb-[38px] 3xl:mb-[46px] lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:mt-[5px] mt-[6.6px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] not-italic text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 w-[4%]"
                      compId="150:460"
                      comWidth={10}
                      comHeight={26}
                      compLeft={17}
                      compRight={0}
                      compType="Text"
                    >{`$`}</Text>
                    <Text
                      className="font-bold lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] text-center lg:text-fs46 xl:text-fs53 text-fs58 2xl:text-fs59 3xl:text-fs71 text-indigo_900 tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 w-[29%]"
                      compId="150:459"
                      comWidth={72}
                      comHeight={70}
                      compLeft={7}
                      compRight={0}
                      compType="Text"
                    >{`99`}</Text>
                    <Column
                      className="items-start justify-start lg:mb-[3px] mb-[4.8px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:ml-[16px] xl:ml-[18px] ml-[20.5px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[10px] xl:mt-[12px] mt-[13.6px] 2xl:mt-[13px] 3xl:mt-[16px] w-[31%]"
                      compId="42"
                      comWidth={78}
                      comHeight={51.600098}
                      compLeft={20.5}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[8px] xl:mr-[9px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[79%]"
                        compId="150:457"
                        comWidth={62}
                        comHeight={25.8}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`per user`}</Text>
                      <Text
                        className="font-normal mt-[0] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[100%]"
                        compId="150:458"
                        comWidth={78}
                        comHeight={25.8}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`per month`}</Text>
                    </Column>
                  </Row>
                  <Text
                    className="font-normal lg:leading-lh20 xl:leading-lh23 2xl:leading-lh26 leading-lh2600 3xl:leading-lh32 lg:mt-[23px] xl:mt-[26px] mt-[29.2px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 w-[100%]"
                    compId="150:455"
                    comWidth={248}
                    comHeight={78}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`All the features you need to keep your personal files safe, accessible, and easy to share.`}</Text>
                </Column>
              </Stack>
              <Column
                className="lg:mt-[30px] xl:mt-[34px] mt-[38px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]"
                compId="49"
                comWidth={370}
                comHeight={134}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-center w-[100%]"
                  compId="43"
                  comWidth={370}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkicon.svg"}
                    className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] mb-[10.4px] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[8px] xl:mb-[9px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.6px] 2xl:mt-[8px] object-contain w-[3%]"
                    compId="150:447"
                    comWidth={12}
                    comHeight={7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="CheckIcon"
                  />
                  <Text
                    className="font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[16px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[44%]"
                    compId="150:446"
                    comWidth={162}
                    comHeight={26}
                    compLeft={13}
                    compRight={0}
                    compType="Text"
                  >{`2 GB of hosting space`}</Text>
                </Row>
                <Row
                  className="items-center justify-center 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]"
                  compId="44"
                  comWidth={370}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkicon.svg"}
                    className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] object-contain w-[3%]"
                    compId="150:448"
                    comWidth={12}
                    comHeight={7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="CheckIcon"
                  />
                  <Text
                    className="font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[16px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[47%]"
                    compId="150:445"
                    comWidth={174}
                    comHeight={26}
                    compLeft={13}
                    compRight={0}
                    compType="Text"
                  >{`14 days of free backups`}</Text>
                </Row>
                <Row
                  className="items-center justify-center mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] w-[100%]"
                  compId="45"
                  comWidth={370}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkicon.svg"}
                    className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] object-contain w-[3%]"
                    compId="150:449"
                    comWidth={12}
                    comHeight={7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="CheckIcon"
                  />
                  <Text
                    className="font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[16px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[37%]"
                    compId="150:444"
                    comWidth={136}
                    comHeight={26}
                    compLeft={13}
                    compRight={0}
                    compType="Text"
                  >{`Social integrations`}</Text>
                </Row>
                <Row
                  className="items-center justify-center xl:mt-[10px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]"
                  compId="46"
                  comWidth={370}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_checkicon.svg"}
                    className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] mb-[10px] 3xl:mb-[12px] lg:mb-[8px] xl:mb-[9px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] mt-[9px] object-contain w-[3%]"
                    compId="150:450"
                    comWidth={12}
                    comHeight={7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="CheckIcon"
                  />
                  <Text
                    className="font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[16px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 text-left w-[45%]"
                    compId="150:443"
                    comWidth={167}
                    comHeight={26}
                    compLeft={13}
                    compRight={0}
                    compType="Text"
                  >{`Advanced client billing`}</Text>
                </Row>
              </Column>
              <Button
                className="border-2 border-gray_200 border-solid font-medium lg:mt-[23px] xl:mt-[26px] mt-[29px] 3xl:mt-[35px] mx-[auto] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius100 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs22 text-indigo_900 w-[54%]"
                compId="150:441"
                comWidth={200}
                comHeight={50}
                compLeft={10}
                compRight={10}
                compType="Button"
              >{`Start Free Trial`}</Button>
            </Column>
          </List>
        </Column>
        <footer
          className="mb-[111.8px] mt-[112px] xl:my-[102px] 2xl:my-[115px] 3xl:my-[138px] lg:my-[89px] w-[100%]"
          compId="150:430"
          comWidth={1400}
          comHeight={148.2}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="items-center justify-start w-[100%]"
            compId="13"
            comWidth={1400}
            comHeight={148.2}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Line
              className="bg-black_900 h-[1px] opacity-op2 w-[100%]"
              compId="150:439"
              comWidth={1400}
              comHeight={1}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
            <Column
              className="items-center justify-start lg:mt-[56px] xl:mt-[64px] mt-[71px] 2xl:mt-[73px] 3xl:mt-[87px] mx-[auto] w-[36%]"
              compId="150:431"
              comWidth={504}
              comHeight={76.2}
              compLeft={10}
              compRight={10}
              compType="Column"
            >
              <Row
                className="items-center justify-between w-[100%]"
                compId="150:433"
                comWidth={504}
                comHeight={26}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[12%]"
                  compId="150:438"
                  comWidth={62}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Portfolio`}</Text>
                <Text
                  className="font-normal not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[19%]"
                  compId="150:437"
                  comWidth={97}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`How it Works`}</Text>
                <Text
                  className="font-normal not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[10%]"
                  compId="150:436"
                  comWidth={50}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Pricing`}</Text>
                <Text
                  className="font-normal not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[9%]"
                  compId="150:435"
                  comWidth={46}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`About`}</Text>
                <Text
                  className="font-normal not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_900 text-left w-[14%]"
                  compId="150:434"
                  comWidth={69}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Contacts`}</Text>
              </Row>
              <Text
                className="font-normal lg:mt-[19px] xl:mt-[22px] mt-[24.2px] 2xl:mt-[24px] 3xl:mt-[29px] mx-[auto] not-italic text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900_66 w-[88%]"
                compId="150:432"
                comWidth={443}
                comHeight={26}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Be sure to take a look at our Terms of Use and Privacy Policy`}</Text>
            </Column>
          </Column>
        </footer>
      </Column>

      <ToastContainer />
    </>
  );
};

export default FigmatoreactPage;
