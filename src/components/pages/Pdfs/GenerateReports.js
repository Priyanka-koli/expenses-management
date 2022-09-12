import { React, useEffect, useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import Button from "@mui/material/Button";

const GenerateReports = (props) => {
  //function to be triggered on Export Pdf button click
  const generatePdfHandler = (event) => {
    let docDefinition = {
      /* watermark: {
        text: "test watermark",
        color: "blue",
        opacity: 0.3,
        bold: true,
        italics: false,
      }, */
      header: "Expenses Report",
      content: [
        {
          layout: "darkHorizontalLines",
          table: {
            headerRows: 1,
            widths: ["*", "auto", 100, "*"],

            body: [
              ["Id", "Expense Title", "Expense Amount", "Expense Date"],
              ...props.data.map((expense) => [
                expense.id,
                expense.expense_title,
                expense.expense_amount,
                expense.expense_date,
              ]),
              [
                { text: "Total Amount", colSpan: 3 },
                {},
                {},
                props.data.reduce((acc, amount) => {
                  return (acc += Number(amount["expense_amount"]));
                }, 0),
              ],
            ],
          },
        },
      ],

      footer: {
        columns: ["Left part", { text: "1", alignment: "right" }],
      },
    };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    // pdfMake.createPdf(docDefinition).download();
    pdfMake.createPdf(docDefinition).open();
  };

  return (
    <>
      <Button type="submit" onClick={generatePdfHandler} sx={{ width: "50%" }}>
        EXPORT PDF
      </Button>
    </>
  );
};
export default GenerateReports;
