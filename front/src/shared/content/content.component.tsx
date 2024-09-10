import { CardType } from '@/type';
import { CardsList } from '../cardsList';
import { MoreButton } from '../moreButton';
import { Loader } from '../loader';

import css from './content.module.css';

type Props = {
  cards: CardType[];
  isLoading: boolean;
  isButtonVisible?: boolean;
  limit?: number;
  loadMoreCats?: () => void;
};
export function Content({
  cards,
  isLoading,
  limit,
  isButtonVisible,
  loadMoreCats,
}: Props) {
  return (
    <div className={css.cardsContainer}>
      {isLoading ? <Loader /> : <CardsList cards={cards} count={limit} />}
      {cards.length == 0 && !isLoading && <div>Cards not found</div>}
      {isButtonVisible && !isLoading && (
        <MoreButton loadMoreCats={loadMoreCats!} />
      )}
    </div>
  );
}
