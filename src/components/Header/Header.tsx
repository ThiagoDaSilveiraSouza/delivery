import { IconsContainer, SearchBar, SignContent } from "./components";
import styles from "./style.module.css";
import { MdLocationOn } from "react-icons/Md";

export const Header = () => {
  const hasLogoImage = false;
  return (
    <header className={styles.mainHeader}>
      <div className={styles.fixedHeader}>
        <div className="centralizer">
          <div className={styles.logoContainer}>
            {hasLogoImage ? (
              <img src="" alt="" />
            ) : (
              <div className={styles.logoDefault}>Logo</div>
            )}
          </div>

          <div className={styles.addressContainer}>
            <p>
              <MdLocationOn size="13px" />
              Nome da rua, Bairo - Cidade
            </p>
            <p>Aberto até às 00h</p>
          </div>

          <SearchBar />
          <IconsContainer />
          <SignContent />
        </div>
      </div>
    </header>
  );
};
