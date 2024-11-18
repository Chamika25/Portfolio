import Link from "next/link";

// Social items
import social from "@/data/social";

const Social = ({ containerStyle, iconStyle}) => {
  return (
    <div className={containerStyle}>
        {social.map((item, index) => {
            return (
                <Link href={item.url} key={index} className={iconStyle}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default Social