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
          <a href="https://github.com/cameronmalloy/BerkeleyRestaurantPrices" target="_blank">
            <div className="button-2px">Github Link</div>
          </a>
          <div className="project-pdf-container">
            <Document
              file="/pdfs/project1.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={1} width={850} />
            </Document>
            <Document
              file="/pdfs/project1.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={2} width={850} />
            </Document>
            <Document
              file="/pdfs/project1.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={3} width={850} />
            </Document>
          </div>
      </div>
    );
  }
}