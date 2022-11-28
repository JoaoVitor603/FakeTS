import { useEffect, useState } from "react";
import Card from "../../components/Cards";
import Header from "../../components/Header";
import Table from "../../components/Table";
import {
  calculateTotalMissingHours,
  calculateWorkedHours,
  calculateTotalExtraHours,
  calculateTotalProjectHours,
} from "../../functions/countingHours";
import { IscheduledHours } from "../../interfaces/timeSheet";
import ApiService from "../../services/hours.service";
import toastMsg, { ToastType } from "../../utils/toastMsg";
import style from "./style.module.scss";
const Home: React.FunctionComponent = () => {
  const [data, setData] = useState<IscheduledHours[]>([]);

  useEffect(() => {
    ApiService.readAll()
      .then((resp) => {
        setData(resp);
      })
      .catch(() =>
        toastMsg(
          ToastType.Error,
          "Ocorreu um error, por favor tente mais tarde!"
        )
      );
  }, []);

  const workedHours = calculateWorkedHours(data);
  const missingHours = calculateTotalMissingHours(data);
  const extraHours = calculateTotalExtraHours(data);
  const projectHours = calculateTotalProjectHours(data);

  return (
    <>
      <Header />
      <main className={style.main}>
        <div className={style.container}>
          <h1 className={style.helloUser}>Boas-Vindas, João Vitor</h1>
          <div className={style.containerCards}>
            <Card title="Horas feitas no mês" content={`${workedHours}/160h`} />
            <Card title="Previsão de horas" content={`${projectHours}/160h`} />
            <Card
              title="Horas Extras"
              content={extraHours}
              className={extraHours === "00:00" ? "" : `${style.positive}`}
            />
            <Card
              title="Horas Negativas"
              content={missingHours}
              className={missingHours === "00:00" ? "" : `${style.negative}`}
            />
          </div>
          <h2 className={style.tableTitle}>Projeto em andamento</h2>
          <Table data={data} />
        </div>
      </main>
    </>
  );
};

export default Home;
