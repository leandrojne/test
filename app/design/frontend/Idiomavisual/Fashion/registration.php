<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details. Se cambia la ruta final por el vendor y el theme nuestro.
 */
\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::THEME,
    'frontend/Idiomavisual/Fashion',
    __DIR__
);