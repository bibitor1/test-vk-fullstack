import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { DeleteResult, Repository } from 'typeorm';
import { Card } from 'src/card/entities/card.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async getFavoriteCardsByLikes(): Promise<Like[]> {
    return await this.likeRepository.find({
      relations: ['card'],
      where: { isLiked: true },
    });
  }

  async createLike(cat_id: number) {
    const existingLike = await this.likeRepository.findOneBy({
      card: { id: cat_id },
    });
    return existingLike
      ? this.likeRepository.update(existingLike, { isLiked: true })
      : this.likeRepository.save({
          ...(await this.likeRepository.create()),
          isLiked: true,
          card: await this.cardRepository.findOneBy({ id: cat_id }),
        });
  }

  async deleteLike(cat_id: number): Promise<DeleteResult> {
    return await this.likeRepository.delete({ card: { id: cat_id } });
  }
}
