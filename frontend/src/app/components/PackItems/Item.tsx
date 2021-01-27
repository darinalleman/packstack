import * as React from 'react';
import { Icon, Tooltip } from "antd";

import { PackItem } from "types/item";

import { Input, Textarea } from "../FormFields";
import { WornIndicator, ItemRow } from "./styles";

import { ShirtIcon } from "../Icons";
import { PackItemGrid } from "styles/grid";

interface ItemProps {
    item: PackItem;
    updateId: number | null;
    removeItem: (id: number) => void;
    updateItem: (id: number, field: string, value: string | number | boolean) => void;
}

const Item: React.FC<ItemProps> = ({ item, removeItem, updateItem }) => {
    const { notes, quantity, worn } = item.packItem;
    const [displayNotes, setDisplayNotes] = React.useState<boolean>(false);

    const notesLabel = () => {
        const label = !displayNotes && !notes ? 'add' : displayNotes ? 'hide' : 'show';
        return `${label} notes`;
    };
    return (
        <ItemRow>
            <PackItemGrid>
                <div>
                    <strong>{item.name}</strong>
                </div>
                <div>
                    {item.product_name}
                </div>
                <div>
                    <a onClick={() => setDisplayNotes(!displayNotes)} className="add-notes">
                        {notesLabel()}
                    </a>
                </div>
                <div className="align-right">
                    {item.weight} {item.weight_unit}
                </div>
                <div className="align-right">
                    <WornIndicator className={worn ? 'active' : ''}>
                        <Tooltip title="Worn items are excluded from base weight"
                                 mouseEnterDelay={.25}
                                 style={{ padding: '8px', textAlign: 'center' }}>
                            <Icon component={ShirtIcon} onClick={() => updateItem(item.id, 'worn', !worn)}/>
                        </Tooltip>
                    </WornIndicator>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <Input value={quantity}
                           style={{ marginBottom: 0, marginRight: '4px' }}
                           type="number"
                           onChange={v => updateItem(item.id, "quantity", v)}/>
                    <span style={{ color: '#aaa', fontSize: '12px' }}>qty</span>
                </div>
                <div className="align-center">
                    <Icon type="close-circle" className="remove-item" onClick={() => removeItem(item.id)}/>
                </div>
            </PackItemGrid>
            {displayNotes && (
                <Textarea value={notes} onChange={v => updateItem(item.id, "notes", v)}/>
            )}
        </ItemRow>
    )
};

export default React.memo(Item);