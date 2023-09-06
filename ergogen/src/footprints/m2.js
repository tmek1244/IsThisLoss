module.exports = {
    nets: {
        net: undefined
    },
    params: {
        class: 'HOLE',
    },
    body: p => `
    (module MountingHole_2.2mm_M2 (layer F.Cu) (tedit 56D1B4CB)
        (attr virtual)
        ${p.at /* parametric position */}
        (fp_text reference "${p.ref}" (at 0 -3.2) (layer F.SilkS) ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
        )

        (fp_text user %R (at 0.3 0) (layer F.Fab)
            (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_circle (center 0 0) (end 2.2 0) (layer Cmts.User) (width 0.15))
        (fp_circle (center 0 0) (end 2.45 0) (layer F.CrtYd) (width 0.05))
        (pad 1 np_thru_hole circle (at 0 0) (size 2.2 2.2) (drill 2.2) (layers *.Cu *.Mask))
    )`
}
