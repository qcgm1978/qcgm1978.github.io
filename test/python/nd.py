import scipy.stats


def ret():
    return scipy.stats.norm(0, 1).pdf(0)
