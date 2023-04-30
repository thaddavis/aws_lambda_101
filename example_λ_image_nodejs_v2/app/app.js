const PDFDocument = require("pdfkit");
// const faker = require("faker");
const getStream = require("get-stream");

exports.handler = async (event) => {
  console.log("-!-");

  const doc = new PDFDocument();

  const randomName = "Taddy Duval";

  doc.text(randomName, { align: "right" });
  doc.text("3717 Royal Palm Ave.", { align: "right" });
  doc.text("Miami Beach, FL 33140", {
    align: "right",
  });
  doc.moveDown();
  doc.text("Dear " + randomName + ",");
  doc.moveDown();
  const lines = ["qwer", "asdf", "zxcv"];
  for (let i = 0; i < lines.length; i++) {
    doc.text(lines[i]);
    doc.moveDown();
  }
  doc.text("Bye Bye", { align: "right" });
  doc.end();

  pdfBuffer = await getStream.buffer(doc);
  pdfBase64 = pdfBuffer.toString("base64");

  const response = {
    statusCode: 200,
    headers: {
      "Content-Length": Buffer.byteLength(pdfBase64),
      "Content-Type": "application/pdf",
      "Content-disposition": "attachment;filename=test.pdf",
    },
    isBase64Encoded: true,
    body: pdfBase64,
  };

  return response;
};
