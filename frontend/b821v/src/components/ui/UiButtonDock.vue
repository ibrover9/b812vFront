<script setup>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.vfs;

// Получаем пропсы от родителя
const props = defineProps({
  priceCar: Number,
  carName: String,
  year: Number,
  representativeFullName: String,
});

// Генерация PDF
const generatePDF = () => {
  const docDefinition = {
    content: [
      {
        text: "ДОГОВОР КУПЛИ-ПРОДАЖИ АВТОМОБИЛЯ",
        style: "header",
        alignment: "center",
        margin: [0, 0, 0, 20],
      },
      { text: "г. Москва", alignment: "right" },
      { text: "21 июня 2025 г.", alignment: "right", margin: [0, 0, 0, 20] },
      {
        text:
          'Гражданин Мелехин Артем Андреевич, паспорт серии 1234 №567890, выдан УФМС по г. Москве 01.01.2015 года, проживающий по адресу: г. Москва, ул. Пушкина, д. 10, кв. 5, именуемый в дальнейшем "Продавец", с одной стороны, и\n' +
          `гражданин ${props.representativeFullName.toLocaleString(
            "ru-RU"
          )}, именуемый в дальнейшем "Покупатель", с другой стороны, заключили настоящий договор о нижеследующем:\n`,
        margin: [0, 0, 0, 20],
      },
      {
        ol: [
          `Продавец продает, а Покупатель покупает следующее транспортное средство:\nМарка: ${props.carName.toLocaleString(
            "ru-RU"
          )}\nГод выпуска: ${props.year.toLocaleString(
            "ru-RU"
          )}\nЦвет: черный\nVIN: XXXXXXXXXXXXXXXX`,
          `Стоимость автомобиля составляет ${props.priceCar.toLocaleString(
            "ru-RU"
          )} рублей.`,
          "Покупатель оплачивает указанную сумму Продавцу полностью в момент подписания настоящего договора.",
          "С момента передачи автомобиля Покупателю, последний принимает на себя все права собственности и ответственность за дальнейшее использование автомобиля.",
          "Настоящий договор составлен в двух экземплярах, по одному для каждой из сторон.",
        ],
        margin: [0, 0, 0, 20],
      },
      {
        columns: [
          [
            { text: "ПРОДАВЕЦ:", bold: true },
            { text: "__________________________" },
            { text: "Мелехин А.А.", margin: [0, 0, 0, 10] },
          ],
          [
            { text: "ПОКУПАТЕЛЬ:", bold: true },
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

  pdfMake.createPdf(docDefinition).download("dogovor.pdf");
};
</script>

<template>
  <button @click="generatePDF">Скачать договор</button>
</template>
