import css from './moreButton.module.css';

export function MoreButton({ loadMoreCats }: { loadMoreCats: () => void }) {
  return (
    <button className={css.moreCatsButton} onClick={loadMoreCats}>
      Загрузить больше котиков
    </button>
  );
}
