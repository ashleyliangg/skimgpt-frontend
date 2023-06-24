import React, { useEffect, useState } from 'react';
import Clipboard from 'react-clipboard.js';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Summary from './summary';
import Retone from './retone';
import Section from './section';

function Tools(props) {
  const [tab, switchTab] = useState('summary');
  const [sections, setSections] = useState(null);
  const [displaySections, setDisplaySections] = useState([]);
  // homes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  const printRef = React.useRef();

  useEffect(() => {
    if (props.sections) {
      setSections(props.sections);
      console.log(sections);
      console.log(`num sections: ${props.generalInfo.num_sections}`);
      setDisplaySections(Array(props.generalInfo.num_sections - 1).fill({ title: 'Loading...', overview: '' }));
      const tempArray = Array(props.generalInfo.num_sections - 1).fill({ title: 'Loading...', overview: '' });
      if (sections) {
        sections.map((section, idx) => {
          console.log(`section: ${section.title}`);
          tempArray[section.id - 1] = { title: section.title, overview: section.overview };
          console.log(`temporary array: ${tempArray}`);
          return true;
        });
        setDisplaySections(tempArray);
      }
    }
  }, [props.sections, props.generalInfo]);

  // console.log(props.sections);

  // code from https://www.robinwieruch.de/react-component-to-pdf/
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png'); // convert item to image

    // eslint-disable-next-line new-cap
    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
  };

  props.sections.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

  // clipboard info from https://clipboardjs.com/ and https://www.npmjs.com/package/react-clipboard.js?activeTab=readme
  function tabs() {
    if (tab === 'summary') {
      return (
        <div className="content">
          <div ref={printRef} id="summary">
            <div className="icon-btn-container">
              <Clipboard data-clipboard-target="#summary" className="icon-btn" onSuccess={() => { console.log('success'); }}>
                <ContentCopyOutlinedIcon />
              </Clipboard>
              <button type="button" className="icon-btn" onClick={handleDownloadPdf}>
                <FileDownloadOutlinedIcon />
              </button>
            </div>
            <div className="tabs-container">
              <button type="button" className="tab" onClick={() => { switchTab('summary'); }}>Summary</button>
              {/* <button type="button" className="tab" onClick={() => { switchTab('tone'); }}>Retone</button> */}
              <button type="button" className="tab">Retone</button>
            </div>
            <Summary generalInfo={props.generalInfo} />
            {/* {sections && sections.map((section, idx) => <Section section={section} index={idx} />)} */}
            {displaySections && displaySections.map((section, idx) => <Section section={section} />)}
          </div>
        </div>

      );
    } else {
      return (
        <div className="content">
          <Retone />
        </div>
      );
    }
  }

  return (
    <div>
      {tabs()}
    </div>

  );
}

export default Tools;
