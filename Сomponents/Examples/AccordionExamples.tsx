import { Accordion } from "UI"

import s from "styles/pages/components-example.module.scss"

const AccordionExamples: React.FC = () => (
  <div key={"Accordion"} className={s.grid}>
    <Accordion header={"default"}>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`}
    </Accordion>

    <Accordion
      header={"Detail and Bold"}
      className={s.accordion_bold_black}
      openTitle={"Detail"}
    >
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`}
    </Accordion>

    <Accordion
      headerClassName={s.accordion_header_bold_purple}
      header={"header"}
      openTitle={"Detail"}
    >
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`}
    </Accordion>
    <div className={s.black_background}>
      <Accordion
        header={"darkmode"}
        className={s.dark_accordion}
        openTitleClassName={s.accordion_title_purple}
        openTitle="hello"
        arrowColor="#8100ef"
      >
        <div className={s.accordion_children}>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
    lacus ex, sit amet blandit leo lobortis eget.`}
        </div>
      </Accordion>
    </div>
  </div>
)

export default AccordionExamples
