import works from '../../../.contents/works.json';
import type { WorkItem } from '../../builder/works';

export const getWorks = (): WorkItem[] => {
  return works;
}