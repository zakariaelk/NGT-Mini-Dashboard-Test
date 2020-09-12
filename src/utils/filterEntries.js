filter(entry => {
    return entry !== 'index'
        && entry !== 'fund_id'
        && entry !== 'fund_name'
        && entry !== 'date'
        && entry !== 'report_status'
        && entry !== 'share_class_id'
        && entry !== 'share_class_name'
        && entry !== 'nb_alerts'
        && entry !== 'subfund_id'
        && entry !== 'subfund_name'
})