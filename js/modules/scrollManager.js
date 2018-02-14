class ScrollManager {
    constructor() {
        this.trigger = $(".scroll-trigger");
        this.bindEvents();
    }

    bindEvents = () => {
        this.trigger.each(function() {
            const $this = $(this);
            const target = $this.attr("data-scroll");
            const $target = $(`.scroll-section[data-scroll="${target}"]`);
            const $window = $(window);
            let offsetTop = 0;
            $this.click(() => {
                if ($window.width() > 768) {
                    offsetTop = -60;
                }
                $.scrollTo($target, 250, {
                    offset: {
                        top: offsetTop
                    }
                });
            });
        });
    }
}