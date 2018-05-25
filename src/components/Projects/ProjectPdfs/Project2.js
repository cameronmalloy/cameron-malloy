import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import ProjectInfo from '../ProjectInfo.js';

export default class Project1 extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
        <div className="container-main-main">
          <div className="project-pdf-container">
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={1} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={2} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={3} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={4} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={5} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={6} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={7} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={8} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={9} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={10} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={11} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={12} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={13} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={14} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={15} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={16} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={17} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={18} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={19} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={20} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={21} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={22} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={23} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={24} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={25} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={26} width={800} />
            </Document>
            <Document
              file="/pdfs/project2.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={27} width={800} />
            </Document>
          </div>
      </div>
    );
  }
}