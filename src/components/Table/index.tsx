import { useState } from "react";
import { IscheduledHours } from "../../interfaces/timeSheet";
import arrow from "./../../img/ac-arrow.svg";
import style from "./style.module.scss";

type props = {
  data: IscheduledHours[];
};
const Table = ({ data }: props) => {
  const [collapseReorder, setcollapseReorder] = useState<boolean>(false);

  return (
    <div className={style.Container}>
      <table className={style.Table}>
        <thead>
          <tr>
            <th className={style.HeadColumn}>
              <div className={style.ContainerTH}>
                Projeto
                <button
                  className={`${style.OrderListButton} ${
                    collapseReorder ? style.OrderListButton__active : ""
                  }`}
                  type="button"
                  onClick={() => {
                    alert("Função não implementada");
                    setcollapseReorder(!collapseReorder);
                  }}
                >
                  <img src={arrow} alt="Icone Flecha" />
                </button>
              </div>
            </th>
            <th className={style.HeadColumn}>
              <div className={style.ContainerTH}>
                Atividades
                <button
                  className={`${style.OrderListButton} ${
                    collapseReorder ? style.OrderListButton__active : ""
                  }`}
                  type="button"
                  onClick={() => {
                    alert("Função não implementada");
                    setcollapseReorder(!collapseReorder);
                  }}
                >
                  <img src={arrow} alt="Icone Flecha" />
                </button>
              </div>
            </th>
            <th className={style.HeadColumn}>
              <div className={style.ContainerTH}>
                Início
                <button
                  className={`${style.OrderListButton} ${
                    collapseReorder ? style.OrderListButton__active : ""
                  }`}
                  type="button"
                  onClick={() => {
                    alert("Função não implementada");
                    setcollapseReorder(!collapseReorder);
                  }}
                >
                  <img src={arrow} alt="Icone Flecha" />
                </button>
              </div>
            </th>
            <th className={style.HeadColumn}>
              <div className={style.ContainerTH}>
                Horas projeto
                <button
                  className={`${style.OrderListButton} ${
                    collapseReorder ? style.OrderListButton__active : ""
                  }`}
                  type="button"
                  onClick={() => {
                    alert("Função não implementada");
                    setcollapseReorder(!collapseReorder);
                  }}
                >
                  <img src={arrow} alt="Icone Flecha" />
                </button>
              </div>
            </th>
            <th className={style.HeadColumn}>
              <div className={style.ContainerTH}>
                Horas apropriadas
                <button
                  className={`${style.OrderListButton} ${
                    collapseReorder ? style.OrderListButton__active : ""
                  }`}
                  type="button"
                  onClick={() => {
                    alert("Função não implementada");
                    setcollapseReorder(!collapseReorder);
                  }}
                >
                  <img src={arrow} alt="Icone Flecha" />
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((h) => (
            <tr className={style.TableRow} key={h.id}>
              <td className={style.Column1}>
                <p className={style.hideText}>{h.project}</p>
              </td>
              <td className={style.Column2}>
                <p className={style.hideText}>{h.activities}</p>
              </td>
              <td className={style.Column3}>{h.startdate}</td>
              <td className={style.Column4}>{h.projecthours} horas</td>
              <td className={style.Column5}>{h.appropriatehours} horas</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
