block('input').elem('clear')(
    attrs()(function () {
        return this.extend(applyNext(), { ref: 'clear' })
    }),
    // have to define full entity due to a bug in vidom engine
    mix()({ block: 'input', elem: 'clear', mods: { visible: true } })
)
