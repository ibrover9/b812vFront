<script setup>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.vfs;

const props = defineProps({
  priceCar: Number,
  carName: String,
  year: Number,
  representativeFullName: String,
});

const generateInvoice = () => {
  const docDefinition = {
    content: [
      {
        text: "СЧЕТ №001",
        style: "header",
        alignment: "center",
        margin: [0, 0, 0, 20],
      },
      { text: "г. Москва", alignment: "right" },
      { text: "21 июня 2025 г.", alignment: "right", margin: [0, 0, 0, 20] },
      {
        text: `Поставщик: Мелехин Артем Андреевич\nПокупатель: ${props.representativeFullName.toLocaleString(
          "ru-RU"
        )}`,
        margin: [0, 0, 0, 20],
      },
      {
        table: {
          widths: ["*", "auto", "auto", "auto"],
          body: [
            [
              { text: "Наименование", bold: true },
              { text: "Год", bold: true },
              { text: "Цена за ед. (руб.)", bold: true },
              { text: "Сумма (руб.)", bold: true },
            ],
            [
              `${props.carName}`,
              `${props.year}`,
              `${props.priceCar.toLocaleString("ru-RU")}`,
              `${props.priceCar.toLocaleString("ru-RU")}`,
            ],
          ],
        },
        layout: "lightHorizontalLines",
        margin: [0, 0, 0, 20],
      },
      {
        text: `Итого к оплате: ${props.priceCar.toLocaleString("ru-RU")} руб.`,
        bold: true,
        alignment: "right",
        margin: [0, 0, 0, 10],
      },
      {
        columns: [
          [
            { text: "Поставщик:", bold: true },
            { text: "__________________________" },
            { text: "Мелехин А.А.", margin: [0, 0, 0, 10] },
          ],
          [
            { text: "Покупатель:", bold: true },
            { text: "__________________________" },
            { text: props.representativeFullName, margin: [0, 0, 0, 10] },
          ],
        ],
      },
    ],
    styles: {
      header: {
        fontSize: 16,
        bold: true,
      },
    },
  };

  pdfMake.createPdf(docDefinition).download("schet.pdf");
};
</script>

<template>
  <button @click="generateInvoice">Скачать счет</button>
</template>
