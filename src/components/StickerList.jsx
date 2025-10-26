import { Component } from "react";
import { Sticker } from "./Sticker.jsx"
import { Choice } from "./Choice.jsx"
import styles from "./StickersList.module.css"; 

export default class StickerList extends Component {
    state = {
        selectedSticker: null, 
    };

    stickerClick = (sticker) => {
        this.setState({ selectedSticker: sticker }); 
    };
    

    render() {
        const { stickers } = this.props;
        return <div className={styles.div}>
            <ul className={styles.list}>
                    {stickers.map((item, index) => (
                        <li className={styles.item} key={index}>
                            <Sticker 
                            img={item.img}
                            label={item.label}
                            onClick={() => this.stickerClick(item)}
                            />
                        </li>
                    ))}
            </ul>
            <Choice sticker={this.state.selectedSticker}/>
        </div>
    }
}