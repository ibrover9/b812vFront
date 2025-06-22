<script setup>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.vfs;

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
        text: `Поставщик: Мелехин Артем Андреевич\nПокупатель: Новиков Артур Денисович`,
        margin: [0, 0, 0, 20],
      },
      {
        table: {
          widths: ["*", "auto", "auto", "auto"],
          body: [
            [
              { text: "Наименование", bold: true },
              { text: "Год", bold: true },
              { text: "Цена за ед. ($)", bold: true },
              { text: "Сумма (руб.)", bold: true },
            ],
            [`$Бугати Вейрон`, `2020`, `160004`, `160004}`],
          ],
        },
        layout: "lightHorizontalLines",
        margin: [0, 0, 0, 20],
      },
      {
        text: `Итого к оплате: 160004 $.`,
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
            { text: "Новиков А.Д.", margin: [0, 0, 0, 10] },
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
