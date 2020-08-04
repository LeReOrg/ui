module.exports = {
    webpack: (config, options) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        config.module.rules.push({
            
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                {
                    loader: 'url-loader',
                    
                },
                ],
            }
            
        )
        // Important: return the modified config
        return config
    },
}