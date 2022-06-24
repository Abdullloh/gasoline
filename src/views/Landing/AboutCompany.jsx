import React from "react";
import Service from "../../components/Servise/Service";
import CompanyImg from "../../assets/img/company-bg.png";
import Text from "../../components/Text/Text";
import { AboutPageStyle } from "../../styles/AboutPageSyle";
import { StyledContainer } from "../../styles/Container.style";
import { StyledLanding } from "../../styles/Landing.style";
import Main from "../../components/Main";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const AboutCompany = () => {
  const {t} = useTranslation()
  let lang = useSelector(state=>state.language.languageData)
  console.log(lang);
  return (
    <StyledLanding img={CompanyImg}>
      <Main
        leftSideText={t("p33")}
        buttonText={t("p34")}
        aboutPageButtonText={t("p35")}
        flexDirection={"column"}
        url={"/products"}
        isFlexTrue={true}
      />
      <StyledContainer>
        <div className="container">
          <div style={{ marginTop: "60px" }}>
            <h2>{t("p36")}</h2>
            <p className="text">
              GASOIL - это первый в Узбекистане маркетплейс нефтяных продукций,
              где вы можете легко размещать свои товары и управлять ими. С нами
              вы можете легко надохить покупателей в онлайн! Продвигайте свои
              товары вместе с нами <br /> Вам всего лишь нужно
              зарегистрироваться в партнерской программе, заполните необходимые
              формы и наши менеджеры свяжутся с вами в ближайшее время. После
              получения доступа к партнерский кабинет вы можете добавлять свои
              товары на нашей площадке и мониторинг будет максимально удобно.{" "}
              <br /> Интернет-магазины сейчас быстро развиваются и мы создаем
              удобства для производителей и покупателей. Размещаяя свои товары
              на нашей площадке вы делаете жизнь покупателей легче и лучше, с
              нами мы можете увеличить свои продажи. <br /> Мы помогаем
              производителям быстро и без лишниз затрат выходить на онлайн
              рынок, вам не нужно создавать веб-сайт, тратиться на продвижение
              своего сайта колосальные деньги, мы сделаем это за вас.
              <br /> Основными задачами Портала являются:
              <br /> предоставление возможности реализации и приобретения
              готовой продукции, комплектующих изделий, сырья и материалов,
              производимых отечественными промышленными предприятиями через
              оналйн площадки внедрение механизма обеспечения свободы отношений
              и прозрачности заключения договоров и платежей между
              хозяйствующими субъектами, а также заказчиками и поставщиками;
              информирование всех заинтересованных кругов о видах, технических
              характеристиках и параметрах качества производимой в республике
              промышленной продукции; обеспечение обмена информацией между
              производителями и покупателями. <br /> Портал выполняет следующие
              функции:
              <br />
              выполняет операторские функции, координирует и контролирует общую
              деятельность Портала; ведет интегрированную деятельность с
              информационными системами и базами данных статистики, финансов и
              других; публикация на Портале о видах и объемах импортной и
              экспортноориентированной продукции, а также размещения перечня
              востребованных в экономике и рекомендованных к освоению
              импортозамещающих продукций; обеспечение размещения правильной и
              реальной информации о промышленной продукции, своевременного
              обновления данной информации и контроля за ним.
            </p>
          </div>
          <AboutPageStyle>
            <ul>
              <li>
                <span>Полное название:</span>
                <span>PETROL AUTO AND INDRUSTRIAL</span>
              </li>
              <li>
                <span>Юридичческий адрес:</span>{" "}
                <span>г. Ташкент, массив Себзор Ц17/18 дом 4, кв.137</span>
              </li>
              <li>
                <span>Расчетный счет:</span> <span>20208000100933302001</span>
              </li>
              <li>
                <span>Наименование банка:</span> <span>Капитал Банк</span>
              </li>
              <li>
                <span>МФО:</span> <span>00974</span>
              </li>
              <li>
                <span>ИНН:</span> <span>305 784 896</span>
              </li>
              <li>
                <span>ОКЭД:</span> <span>46710</span>
              </li>
            </ul>
          </AboutPageStyle>
        </div>
      </StyledContainer>
      <Service />
    </StyledLanding>
  );
};

export default AboutCompany;
