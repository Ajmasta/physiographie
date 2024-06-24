import { IconType } from "react-icons";
import {
  FaBook,
  FaFlask,
  FaPuzzlePiece,
  FaGears,
  FaStar,
  FaChartBar,
} from "react-icons/fa6";

interface Props {
  size: number;
  color: string;
  className?: string;
  icon: IconList;
}

export type IconList =
  | "book"
  | "flask"
  | "puzzle"
  | "gears"
  | "star"
  | "chartBar";

const iconMap: Record<IconList, IconType> = {
  book: FaBook,
  flask: FaFlask,
  puzzle: FaPuzzlePiece,
  gears: FaGears,
  star: FaStar,
  chartBar: FaChartBar,
};

const Icon = ({ size, color, className, icon }: Props) => {
  const IconComponent = iconMap[icon];
  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;
