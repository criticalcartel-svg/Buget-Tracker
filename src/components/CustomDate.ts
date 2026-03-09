export default function CustomDate(date: Date, locale: string = "en-US") {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    // weekday: "long",
  };

  return new Intl.DateTimeFormat(locale, options).format(date);
}

export const getToday = () => CustomDate(new Date());

function ConfiguredId() {
  const date = Date.now();
  const id = Math.round(date * Math.random() * Math.random());
  return id;
}
export const id = () => ConfiguredId();
